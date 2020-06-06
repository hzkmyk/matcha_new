import React, { Component } from "react"
import FooterMenu from "./components/FooterMenu"
import MyPageCon from "./components/mypageCon"
import Sidebar from "./components/Sidebar"
import { Head } from "../Head"
import { Link } from 'react-router-dom'

class MyPage extends Component {
	constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  render() {
    const { windowWidth } = this.state;

    const sidebarCollapsed = windowWidth < 1100;

    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
      showFooterMenuText: windowWidth > 500,
      showSidebar: windowWidth > 768,
      sidebarWidth: 150
    };

    const menuItems = [
			{ icon: `M`, text: "My Page"},
      { icon: <Link to="../mypage/general">G</Link>, text: "General Info" },
      { icon: <Link to="../mypage/profile">P</Link>, text: "Profile"},
      { icon: <Link to="../mypage/images">I</Link>, text: "Images" },
      { icon: <Link to="../mypage/seen">S</Link>, text: "Seen History"},
      { icon: <Link to="../mypage/liked">L</Link>, text: "Like History"}
		];

    return (
			<div>
				<div id="myPageHead"><Head /></div>
				<div className="mypagebody"
					style={{
						backgroundColor: styles.black(0.05),
						minHeight: "100vh",
						position: "relative",
						paddingTop: "80px",
					}}
				>
					{styles.showSidebar ? (
						<Sidebar menuItems={menuItems} styles={styles} />
					) : (
						<div></div>
					)}

					<MyPageCon style={styles} />

					{!styles.showSidebar && (
						<FooterMenu menuItems={menuItems} styles={styles} />
					)}
				</div>
			</div>
    );
  }
}


export default MyPage;