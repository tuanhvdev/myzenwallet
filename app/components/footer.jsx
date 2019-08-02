import React from 'react'
import {Container, Row, Col} from 'reactstrap';

export default class ZFooter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="site-footer">
        <Container fluid={true}>
          <Row>
            <Col sm="6" md="2">
              <div className="contact-us">
                <img className="img-fluid logo"
                     src="https://www.horizen.global/assets/img_v2/logo/horizen_logo_white.svg" alt="Horizen"/>
                Contact us:<br/>
                <a className="blue" href="mailto:info@horizen.global">info@horizen.global</a>
              </div>
            </Col>
            <Col sm="6" md="2">
              <h4>About</h4>
              <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link" href="https://www.horizen.global/what-is-horizen/">What is Horizen?</a></li>
                <li className="nav-item"><a className="nav-link" href="https://www.horizen.global/team/">Horizen Team</a></li>
                <li className="nav-item"><a className="nav-link" href="https://www.horizen.global/roadmap/">Horizen Roadmap</a></li>
              </ul>
            </Col>
            <Col sm="6" md="4">
              <h4>Resources</h4>
              <Row>
                <Col>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="/faq.html">FAQ</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/guide.html">Getting started</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://explorer.horizen.global" target="_blank">Block Explorer</a>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="https://support.horizen.global" target="_blank">Support</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://github.com/zencashofficial/keys" target="_blank">Public Keys</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.horizen.global/media/">Media Kit</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col sm="6" md="4">
              <h4>Join our Community</h4>
              <Row>
                <Col>
                  <ul className="nav flex-column community-column">
                    <li className="nav-item">
                      <a className="nav-link" href="https://twitter.com/horizenglobal" target="_blank">
                        <span><img src="https://www.horizen.global/assets/img_v2/icons/social/twitter.png" alt="Twitter"/></span> Twitter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.facebook.com/horizenglobal/" target="_blank">
                        <span><img src="https://www.horizen.global/assets/img_v2/icons/social/facebook.png" alt="Facebook"/></span> Facebook
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.linkedin.com/company/25052505/" target="_blank">
                        <span><img src="https://www.horizen.global/assets/img_v2/icons/social/linkedin.png" alt="LinkedIn"/></span> LinkedIn
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.youtube.com/channel/UCQ0v_lUnZHIKUQUXJzfgqOg"
                         target="_blank">
                        <span><img src="https://www.horizen.global/assets/img_v2/icons/social/youtube.png" alt="YouTube"/></span> YouTube
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://horizen.global/invite/telegram" target="_blank">
                        <span><img src="https://www.horizen.global/assets/img_v2/icons/social/telegram.png" alt="Telegram"/></span> Telegram
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://horizen.global/invite/discord" target="_blank">
                        <span><img src="https://www.horizen.global/assets/img_v2/icons/social/discord.png" alt="Discord"/></span> Discord
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="nav flex-column community-column">
                    <li className="nav-item">
                      <a className="nav-link" href="https://bitcointalk.org/index.php?topic=2047435.0" target="_blank">
                        <span><img src="https://www.horizen.global/assets/img_v2/icons/social/bitcointalk.png" alt="Bitcoin"/></span> Bitcoin
                        Talk
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://github.com/ZencashOfficial" target="_blank">
                        <span><img src="https://www.horizen.global/assets/img_v2/icons/social/github.png" alt="Github"/></span> Github
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.reddit.com/r/Horizen/" target="_blank">
                        <span><img src="https://www.horizen.global/assets/img_v2/icons/social/reddit.png" alt="Reddit"/></span> Reddit
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://forum.horizen.global/" target="_blank">
                        <span><img src="https://www.horizen.global/assets/img_v2/icons/social/chat.png" alt="Forum"/></span> Forum
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://blog.horizen.global/" target="_blank">
                        <span><img src="https://www.horizen.global/assets/img_v2/icons/social/blog.png" alt="News Blog"/></span> News Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.meetup.com/pro/horizen/" target="_blank">
                        <span><img src="https://www.horizen.global/assets/img_v2/icons/social/meetup.png" alt="Meetup"/></span> Meetup
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="text-center small copyright">© 2019 Horizen. All rights reserved.</div>
        </Container>
      </div>
    )
  }
}
