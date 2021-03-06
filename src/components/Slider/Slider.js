import React, { Component, PropTypes } from 'react'
import { Text, View, ListView } from 'react-native'
import Card from '../Card/Card'
import css from './Slider.css'

export default class Slider extends Component {
	constructor (props) {
		super(props)
		// create recipes list from props.recipes
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		// init state
		this.state = {
			dataSource: this.ds.cloneWithRows(props.recipes)
		}
	}
	componentWillReceiveProps (props) {
		// update when state change
		this.setState({
			dataSource: this.ds.cloneWithRows(props.recipes)
		})
	}
	render () {
		return (
			<View style={css.slider}>
				<Text style={css.slider__title}>{this.props.title.toUpperCase()}</Text>
				<ListView
					horizontal
					enableEmptySections
					showsHorizontalScrollIndicator={false}
					dataSource={this.state.dataSource}
					renderRow={this._renderCard.bind(this)}
				/>
			</View>
		)
	}
	_renderCard (cardData) {
		return (
			<Card
				data={cardData}
				onPressHandler={this.props.onPressHandler}
				style={css.slider__item}
			/>
		)
	}
}

Slider.propTypes = {
	onPressHandler: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	recipes: PropTypes.array.isRequired
}
