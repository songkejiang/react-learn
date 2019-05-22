import React, {Component} from 'react'
import { HeaderWraper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWraper, SearchInfo, SearchInfoTitle, SearchInfoSwitch , SearchInfoItem, SearchInfoList} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Header extends Component{
	getListArea(show) {
		if (show) {
			return(
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>
						换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null
		}
	};
	render() {
		return(
			<HeaderWraper>
				<Logo />
				<Addition>
					<Button>注册</Button>
					<Button>
						<i className='iconfont'>&#xe61c;</i>
						写文章</Button>
				</Addition>
				<Nav>
					<NavItem className='left active'>
						首页
				</NavItem>
					<NavItem className='left'>
						下载
				</NavItem>
					<NavItem className='right'>
						登录
				</NavItem>
					<NavItem className='right'>
						<i className='iconfont'>&#xe636;</i>
					</NavItem>
					<SearchWraper>
						<CSSTransition
							in={this.props.focused}
							timeout={200}
							classNames='slide'
						>
							<NavSearch
								className={this.props.focused ? 'focused' : ''}
								onFocus={this.props.handleFocus}
								onBlur={this.props.handleBlur}
							></NavSearch>
						</CSSTransition>
						<i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</i>
						{this.getListArea(this.props.focused)}
					</SearchWraper>
				</Nav>
			</HeaderWraper>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleFocus() {
			dispatch(actionCreators.getList())
			dispatch(actionCreators.searchFocus())
		},
		handleBlur() {
			dispatch(actionCreators.searchBlur())
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)