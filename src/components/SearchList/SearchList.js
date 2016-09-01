import React, { Component, PropTypes } from 'react'
import { Text, View, TextInput } from 'react-native'
import SearchItem from '../SearchItem/'
import SuggestList from '../SuggestList/'
import css from './SearchList.css'

class SearchList extends Component {
	constructor (props) {
		super(props)
		this.state = {
			text: 'Что приготовим?',
			soon: 'Скоро в приложении',
			selectionData: [{
				title: 'События'
			}, {
				title: 'Кухни народов мира'
			}, {
				title: 'Специальные подборки'
			}],
			protectedData: [{
				title: 'Бульоны и супы'
			}, {
				title: 'Основные блюда'
			}, {
				title: 'Салаты'
			}, {
				title: 'Овощи'
			}, {
				title: 'Десерты'
			}]
		}
	}

	onSuggestItemPress () {

	}

	handleInput (text) {
		this.setState({text})
		const { searchGo } = this.props
		searchGo(text)
	}

	render () {
		const { products } = this.props
		return (
			<View style={css.searchList}>
				<TextInput
					style={css.searchlist__input}
					onChangeText={this.handleInput.bind(this)}
					placeholder={this.state.text}
				/>
				<SuggestList
					onPress={this.onSuggestItemPress.bind(this)}
					items={products}
					/>
				{this.state.selectionData.map((data, i) => {
					return <SearchItem data={data} key={i} />
				})}
				<Text style={css.searchList__header}>{this.state.soon.toUpperCase()}</Text>
				{this.state.protectedData.map((data, i) => {
					return <SearchItem data={data} key={i} />
				})}
			</View>
		)
	}
}

SearchList.propTypes = {
	searchGo: PropTypes.func.isRequired,
	products: PropTypes.array
}

export default SearchList
