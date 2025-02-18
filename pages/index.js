import React, { Component } from 'react';
import Layout from '../components/Layout'
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import { Link } from '../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns }
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <Link route={`/campaigns/${address}`}><a>View Campaign</a></Link>,
        fluid: true
      }
    });

    return <Card.Group items={items} />
  }

  render() {
    return (
      <Layout>
        <h3>Open Campaigns</h3>
        <Link route="/campaigns/new">
          <a>
            <Button 
              floated="right"
              content="Create Campign"
              icon="add circle" 
              primary
            />
          </a>
        </Link>
        {this.renderCampaigns()}
      </Layout>
    );
  }
}

export default CampaignIndex;