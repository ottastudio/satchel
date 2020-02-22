import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const SEO = ({ description, lang, meta, title, keywords }) => {
    const metaDescription = description;
    const metaKeywords = `fashion, women, ${keywords ? keywords : ''}`;
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s Satchel.`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: metaKeywords,
                },
            ].concat(meta)}
        />
    );
};

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: `Satchel | Indonesia fashion woman.`
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO;