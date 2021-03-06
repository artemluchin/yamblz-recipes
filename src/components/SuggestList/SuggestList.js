import React, { Component, PropTypes } from 'react'
import { Text, View, ListView } from 'react-native'
import css from './SuggestList.css'

class SuggestList extends Component {
	constructor (props) {
		super(props)
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			list: this.ds.cloneWithRows(this.props.items)
		}
	}
	componentWillReceiveProps (props) {
		this.setState({
			list: this.ds.cloneWithRows(this.props.items)
		})
	}
	render () {
		return (
			<View style={css.suggestlist}>
				<ListView
					horizontal
					enableEmptySections
					showsHorizontalScrollIndicator={false}
					dataSource={this.state.list}
					renderRow={this.renderItem.bind(this)}
				/>
			</View>
		)
	}
	renderItem (item) {
		return (
			<View
				onPress={this.props.opPress}
				style={css.suggestlist__item}>
				<Text
					numberOfLines={1}
					style={css.suggestlist__text}>
						{item.title}
				</Text>
			</View>
		)
	}
}

SuggestList.propTypes = {
	items: PropTypes.object.isRequired
}

export default SuggestList
