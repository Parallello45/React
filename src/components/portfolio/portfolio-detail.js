import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItem: {}
        }
    }

    componentWillMount() {
        this.getPortfolioItem();
    }

    getPortfolioItem() {
        axios.get(`https://graemecarver.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { withCredentials: true })
        .then(response => {
            this.setState({
                portfolioItem: response.data.portfolio_item
            })
        }).catch(error => {
            console.log("error from getPortfolioItem", error)
        })
    }

    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url
        } = this.state.portfolioItem;

        return (
            <div className="portfolio-details-wrapper">
                <div className="top-row">
                    <div className="top-row-item-left">
                        <h1>{name}</h1>
                    </div>
                    <div className="top-row-item-center">
                        <h2>{category}</h2>
                    </div>
                    <div className="logo">
                        <img src={logo_url} />
                    </div>
                </div>

                <div className="banner-image">
                    <img src={banner_image_url} />
                </div>

                <div className="description">
                    <p>{description}</p>
                </div>

            </div>
        )
    }
}