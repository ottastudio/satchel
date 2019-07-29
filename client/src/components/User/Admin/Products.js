import React, { Component } from 'react';
import { DashboardLayout } from '../../../hoc/global';
import { connect } from 'react-redux';

import { getBrands, getCategories, getGenders, getSeries, getUsables } from '../../../store/actions/actions_products';
import { toggleDashboardMenuFalse } from '../../../store/actions/actions_ui';
import { toggleProduct, toggleBrand, toggleCategory, toggleUsable } from '../../../store/actions/actions_adminUI';
import { populateOptionFields } from '../../utils/Form/actions_form';

class Products extends Component {
    state = {
        formData: {
            brand: {
                element: 'select',
                value: '',
                config: {
                    label: 'Product Brand',
                    name: 'brands_input',
                    options: []
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showlabel: true
            },
            category: {
                element: 'select',
                value: '',
                config: {
                    label: 'Product Category',
                    name: 'categories_input',
                    options: []
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showlabel: true
            },
            gender: {
                element: 'select',
                value: '',
                config: {
                    label: 'Product Gender',
                    name: 'gender_input',
                    options: []
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showlabel: true
            },
            series: {
                element: 'select',
                value: '',
                config: {
                    label: 'Product Series',
                    name: 'series_input',
                    options: []
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showlabel: true
            },
            usable: {
                element: 'select',
                value: '',
                config: {
                    label: 'Product Usable',
                    name: 'usable_input',
                    options: []
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showlabel: true
            },
        }
    }
    componentDidMount() {
        const formData = this.state.formData;
        this.props.dispatch(getBrands()).then(() => {
            const newFormData = populateOptionFields(formData, this.props.products.brands, 'brand');
            this.updateFields(newFormData)
        })
        this.props.dispatch(getCategories()).then(() => {
            const newFormData = populateOptionFields(formData, this.props.products.categories, 'category');
            this.updateFields(newFormData)
        })
        this.props.dispatch(getGenders()).then(() => {
            const newFormData = populateOptionFields(formData, this.props.products.genders, 'gender');
            this.updateFields(newFormData)
        })
        this.props.dispatch(getSeries()).then(() => {
            const newFormData = populateOptionFields(formData, this.props.products.series, 'series');
            this.updateFields(newFormData)
        })
        this.props.dispatch(getUsables()).then(() => {
            const newFormData = populateOptionFields(formData, this.props.products.usables, 'usable');
            this.updateFields(newFormData)
        })
        // this.props.dispatch(toggleDashboardMenuFalse())
    }

    updateFields = (newFormdata) => {
        this.setState({
            formData: newFormdata
        })
    }

    render() {
        // console.log(this.state.formData);
        const pages = [
            { name: 'manage product', click: () => this.props.dispatch(toggleProduct()) },
            { name: 'manage brands', click: () => this.props.dispatch(toggleBrand()) },
            { name: 'manage categories', click: () => this.props.dispatch(toggleCategory()) },
            { name: 'manage usable', click: () => this.props.dispatch(toggleUsable()) },
        ]
        return (
            <DashboardLayout style={{ padding: '120px 40px 40px' }}>
                Products
                {
                    pages.map(({ name, click }) => (
                        <div onClick={click} key={name}>{name}</div>
                    ))
                }

                {/* <div onClick={() => this.props.dispatch(toggleProduct())}>Manage Products.</div> */}
            </DashboardLayout>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Products);