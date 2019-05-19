import React from 'react'
import { HeaderWraper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWraper } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
const Header = (props) => {
	return (
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
						in={props.focused}
						timeout={200}
						classNames='slide'
					>
						<NavSearch
							className={props.focused ? 'focused' : ''}
							onFocus={props.handleFocus}
							onBlur={props.handleBlur}
						></NavSearch>
					</CSSTransition>
					<i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</i>
				</SearchWraper>
			</Nav>
		</HeaderWraper>
	)
}
const mapStateToProps = (state) => {
	return {
		focused: state.header.get('focused')
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleFocus() {
			dispatch(actionCreators.searchFocus())
		},
		handleBlur() {
			dispatch(actionCreators.searchBlur())
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)