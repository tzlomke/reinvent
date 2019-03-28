import React from 'react';

<<<<<<< HEAD
class CampaignForm extends Component {

  state = {
    titleInput: '',
    authorInput: '',
    campaignInputArea: '',
    campaignsFromDB: []
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const campaignForm = document.getElementById('newCampaign');
    API.campaignPost({
      title: this.state.titleInput,
      author: this.state.authorInput,
      synopsis: this.state.campaignInputArea})
      .then(response => {
        (console.log(`You successfully uploaded: ${response.data.title}`));
      });
    this.setState({
      titleInput: '',
      authorInput: '',
      campaignInputArea: ''
    });
    campaignForm.reset();
    this.loadCampaigns();
  };

  handleCampaignClick = (event) => {
    const id = event.target.dataset.id;
    this.state.campaignsFromDB.map(element => {
      if(element._id === id) {
        // This should expand the clicked campaign, and display the discussion
        return `This one: ${element}`;
      }
      return element;
    });
    return 'success';
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    });
  };

  loadCampaigns = () => {
    API.campaignGet()
      .then(response => {
        this.setState({ campaignsFromDB: response.data });
      });
  };

  componentDidMount = () => {
    this.loadCampaigns();
  };
  

  render() {
=======
function CampaignForm(props)  {
>>>>>>> master
    return(
      <div className= "modal" id="campaignFormModal">
        <header>Campaign</header>
          <section id="campaignEntry">
            <form id="newCampaign">
              <section id="newCampTitle">
                <label htmlFor="titleIt">Title</label>
                <input type="text" id="titleIt" name="titleInput" value={props.titleInput} onChange={props.handleChange}></input>
              </section>
              <section id="newCampAuthor">
                <label htmlFor="authorIt">Author</label>
                <input type="text" id="authorIt" name="authorInput" value={props.authorInput} onChange={props.handleChange}></input>
              </section>
              <section id="newCampSynop">
                <label htmlFor="campaignIt">New Campaign Here</label>
                <textarea id="campaignIt" name="campaignInputArea" value={props.campaignInput} onChange={props.handleChange}></textarea>
              </section>
                <button id="submitCampaign" type="submit" className="modal-close" onClick = {props.handleFormSubmit}>Submit</button>
              </form>
            </section>
      </div>
    );
};

export default CampaignForm;