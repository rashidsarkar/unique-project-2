import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { Container, Segment } from "semantic-ui-react";

function SocailShare({ urllink }) {
  return (
    <div>
      <Container>
        <Segment>
          <FacebookShareButton
            url={urllink}
            quote={`Rate my Project`}
            hashtag="#React"
          >
            <FacebookIcon round size={32} /> Share Now
          </FacebookShareButton>
        </Segment>
      </Container>
    </div>
  );
}

export default SocailShare;
