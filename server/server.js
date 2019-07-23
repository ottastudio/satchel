const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.static('client/build'));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//=================================
//             MODELS
//=================================
const { User } = require('./models/user');
const { Product } = require('./models/product');
const { Gender } = require('./models/gender');
const { Brand } = require('./models/brand');
const { Category } = require('./models/category');
const { Series } = require('./models/series');
const { Usable } = require('./models/usable');

//=================================
//             MIDDLEWARE
//=================================
const { auth } = require('./middleware/auth');
const { admin } = require('./middleware/admin');

// GENDER
app.post('/api/product/gender', auth, admin, (req, res) => {
    const gender = new Gender(req.body);

    gender.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json({
            success: true,
            gender: doc
        })
    })
})

app.get('/api/product/genders', (req, res) => {
    Gender.find({}, (err, genders) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(genders);
    })
})

// USABLE
app.post('/api/product/usable', auth, admin, (req, res) => {
    const usable = new Usable(req.body);

    usable.save((err, doc) => {
        if(err) return res.json({success: false, err});
        res.status(200).json({
            success: true,
            usable: doc
        })
    })
})

app.get('/api/product/usables', (req, res) => {
    Usable.find({}, (err, usables) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(usables);
    })
})

// CATEGORIES
app.post('/api/product/category', auth, admin, (req, res) => {
    const category = new Category(req.body);

    category.save((err, doc) => {
        if(err) return res.json({success: false, err});
        res.status(200).json({
            success: true,
            category: doc
        })
    })
})

app.get('/api/product/categories', (req, res) => {
    Category.find({}, (err, categories) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(categories);
    })
})

// BRAND
app.post('/api/product/brand', auth, admin, (req, res) => {
    const brand = new Brand(req.body);

    brand.save((err, doc) => {
        if(err) return res.json({success: false, err});
        res.status(200).json({
            success: true,
            brand: doc
        })
    })
})

app.get('/api/product/brands', (req, res) => {
    Brand.find({}, (err, categories) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(categories);
    })
})

// SERIES
app.post('/api/product/series', auth, admin, (req, res) => {
    const series = new Series(req.body);

    series.save((err, doc) => {
        if(err) return res.json({success: false, err});
        res.status(200).json({
            success: true,
            series: doc
        })
    })
})

app.get('/api/product/series', (req, res) => {
    Series.find({}, (err, categories) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(categories);
    })
})


//=================================
//             PRODUCTS
//=================================
app.post('/api/product/shop', (req, res) => {
    let order = req.body.order ? req.body.order : 'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === 'price') {
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            } else {
                findArgs[key] = req.body.filters[key]
            }
        }
    }

    findArgs['publish'] = true;

    Product.
        find(findArgs).
        populate('gender').
        populate('usable').
        populate('category').
        populate('series').
        populate('brand').
        sort([[sortBy, order]]).
        skip(skip).
        limit(limit).
        exec((err, articles) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({
                size: articles.length,
                articles
            })
        })
})

app.get('/api/product/articles', (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;

    Product.find().
        populate('gender').
        populate('usable').
        populate('category').
        populate('series').
        populate('brand').
        sort([[sortBy, order]]).
        limit(limit).
        exec((err, articles) => {
            if (err) return res.status(400).send(err);
            res.send(articles);
        })
})

app.get('/api/product/articles_by_id', (req, res) => {
    let type = req.query.type;
    let items = req.query.id;

    if (type === 'array') {
        let ids = req.query.id.split(',');
        items = [];
        items = ids.map(item => {
            return mongoose.Types.ObjectId(item)
        })
    }

    Product.
        find({ '_id': { $in: items } }).
        populate('gender').
        populate('usable').
        populate('category').
        populate('series').
        populate('brand').
        exec((err, docs) => {
            return res.status(200).send(docs)
        })
})

app.post('/api/product/article', auth, admin, (req, res) => {
    const product = new Product(req.body);

    product.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json({
            success: true,
            article: doc
        })
    })
})

//=================================
//             USERS
//=================================
// AUTH
app.get('/api/users/auth', auth, (req, res) => {
    res.status(200).json({
        isAdmin: req.user.role === 1 ? true : false,
        isAuth: true,
        email: req.user.email,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        role: req.user.role,
        history: req.user.history
    })
})
// GET ALL USERS
app.get('/api/users', auth, admin, (req, res) => {
    User.find({}, (err, user) => {
        if (err) return req.status(400).send(err);
        res.status(200).send(user);
    })
})
// REGISTER
app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json({
            success: true,
            userdata: doc
        })
    })
})
// LOGIN
app.post('/api/users/login', (req, res) => {
    User.findOne({ 'email': req.body.email, 'username': req.body.username }, (err, user) => {
        if (!user) return res.json({ loginSuccess: false, message: 'Email not found' });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) return res.json({ loginSuccess: false, message: 'Wrong password' });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie('w_auth', user.token).status(200).json({
                    loginSuccess: true
                })
            })
        })
    })
})
// LOGOUT
app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate(
        { _id: req.user._id },
        { token: '' },
        (err, doc) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).send({
                success: true
            })
        }
    )
})
// UPDATE USER
app.post('/api/users/update_profile', auth, (req, res) => {
    User.findOneAndUpdate(
        { _id: req.user._id },
        { "$set": req.body },
        { new: true },
        (err, doc) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).send({
                success: true,
                doc
            })
        }
    )
})

// DEFAULT PRODUCTION
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.get('/*', (req, res) => {
        res.sendfile(path.resolve(__dirname, '../client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 2207;
app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`)
})