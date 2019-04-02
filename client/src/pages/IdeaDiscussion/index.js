import React from 'react';


return (
  <div>
    <SubTitle 
      subTitleText="Active Ideas"
    />
    <CardOutline
      colSize={ "12" } 
      cardColor={ "" }
      cardTextColor={ "" }
    >
      <div>
        <a href="/ideas/active">Back</a>
        {campaignClicked.vote.length  !== 0 ? (
          <div>
            <CampaignDisplay
            handleData={()=>this.handleData(campaignClicked.vote[0]._id, campaignClicked._id)}
            data={campaignClicked.vote}
            title={campaignClicked.title}
            author={campaignClicked.author}
            synopsis={campaignClicked.synopsis}
            key={campaignClicked._id}
            styles={{opacity:1}}
            // text={customText}
            onCreate={this.onCreate}
            onUpvote={this.onUpvote}
            onClose={this.onClose}
            onReset={this.onReset}
            onDownvote={this.onDownvote}
            onExpand={this.onExpand}
            onEdit={this.onEdit}
            isAdmin={true}
            clientId={this.state.userId}
            />
            {campaignClicked.comments.map((discussion, index) => 
              <DiscussionDisplay
              key={index}
              discussionData={discussion}
              />
          )}
          <DiscussionForm 
          discussionSubmit={this.handleDiscussionSubmit}
          discussionFormChange={this.handleChange}
          discussionTitleInput={this.state.discussionTitleInput}
          discussionAuthorInput={this.state.discussionAuthorInput}
          discussInputArea={this.state.discussInputArea}/>
        </div>
      ):(
        <div>
          <CampaignDisplay
          // Commented out. I don't think we need this, and it causes errors since there is now vote on this discussion load
          handleData={()=>this.handleData(campaignClicked.vote[0]._id, campaignClicked._id)}
          data={campaignClicked.vote}
          title={campaignClicked.title}
          author={campaignClicked.author}
          synopsis={campaignClicked.synopsis}
          key={campaignClicked._id}
          styles={{opacity:1}}
          // text={customText}
          onCreate={this.onCreate}
          onUpvote={this.onUpvote}
          onClose={this.onClose}
          onReset={this.onReset}
          onDownvote={this.onDownvote}
          onExpand={this.onExpand}
          onEdit={this.onEdit}
          isAdmin={true}
          clientId={this.state.userId}
          />
          {campaignClicked.comments.map((discussion, index) => 
            <DiscussionDisplay
            key={index}
            discussionData={discussion}
            />
            )}
            <DiscussionForm 
            discussionSubmit={this.handleDiscussionSubmit}
            discussionFormChange={this.handleChange}
            discussionTitleInput={this.state.discussionTitleInput}
            discussionAuthorInput={this.state.discussionAuthorInput}
            discussInputArea={this.state.discussInputArea}/>
          </div>
        )}
      </div>
    </CardOutline>
  </div>
)