import React from 'react'
import {
  ButtonDropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import HZicon from "../assets/images/horizen-icon.svg";

export default class ZNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Navbar toggleable>
        <NavbarToggler right onClick={this.toggleNavbar}/>
        <NavbarBrand href='/'>
          <img src={HZicon} alt="Horizen" className="logo"/>
          myzenwallet.io
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>

            <NavItem>
              <NavLink href='https://www.horizen.global'>Home</NavLink>
            </NavItem>

            <UncontrolledDropdown>
              <DropdownToggle nav caret>Built on Horizen</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://www.horizen.global/zen/">ZEN</DropdownItem>
                <DropdownItem href="https://www.horizen.global/zenchat/">ZenChat</DropdownItem>
                <DropdownItem href="https://www.horizen.global/zenpub/">ZenPub</DropdownItem>
                <DropdownItem href="https://www.horizen.global/zenhide/">ZenHide</DropdownItem>
                <DropdownItem href="https://www.horizen.global/zendao/">ZenDAO</DropdownItem>
                <DropdownItem href="https://www.horizen.global/zennodes/">ZenNodes</DropdownItem>
                <DropdownItem href="https://www.horizen.global/spherebyhorizen/">Sphere by Horizen</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href='http://getzen.cash'>Get ZEN</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='https://www.horizen.global/wallets/'>Store ZEN</NavLink>
            </NavItem>

            <UncontrolledDropdown>
              <DropdownToggle nav caret>Earn ZEN</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://www.horizen.global/mining-pools/">Mine ZEN</DropdownItem>
                <DropdownItem href="https://www.horizen.global/securenodes/">Secure Nodes</DropdownItem>
                <DropdownItem href="https://www.horizen.global/supernodes/">Super Nodes</DropdownItem>
                <DropdownItem href="https://getzen.cash">ZEN Faucet</DropdownItem>
                <DropdownItem href="https://forum.horizen.global/">Submit a Proposal</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown>
              <DropdownToggle nav caret>Community</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://twitter.com/horizenglobal">Twitter</DropdownItem>
                <DropdownItem href="https://www.facebook.com/horizenglobal/">Facebook</DropdownItem>
                <DropdownItem href="https://www.linkedin.com/company/25052505/">Linkedin</DropdownItem>
                <DropdownItem href="https://www.youtube.com/channel/UCQ0v_lUnZHIKUQUXJzfgqOg">Youtube</DropdownItem>
                <DropdownItem href="https://horizen.global/invite/discord">Discord</DropdownItem>
                <DropdownItem href="https://horizen.global/invite/telegram">Telegram</DropdownItem>
                <DropdownItem href="https://www.reddit.com/r/Horizen/">Reddit</DropdownItem>
                <DropdownItem href="https://bitcointalk.org/index.php?topic=2047435.0">Bitcointalk</DropdownItem>
                <DropdownItem href="https://forum.horizen.global">Forum</DropdownItem>
                <DropdownItem href="https://github.com/ZencashOfficial">GitHub</DropdownItem>
                <DropdownItem href="https://blog.horizen.global">Blog</DropdownItem>
                <DropdownItem href="https://store.horizen.global">Store</DropdownItem>
                <DropdownItem href="https://www.meetup.com/pro/horizen/">Meetup</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
