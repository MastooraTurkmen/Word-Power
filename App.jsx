import React from "react"
import wordsDataOne from "./data/wordsDataOne"
import wordsDataTwo from "./data/wordsDataTwo"
import Header from "./components/Header"
import Word from "./components/Word"
import NavButtons from "./components/NavButtons"
import Footer from "./components/Footer"

export default function App() {
	const [wordsDataArray, setWordsDataArray] = React.useState(wordsDataOne)
	const [currentWord, setCurrentWord] = React.useState(wordsDataArray[0])
	const navData = {wordsDataArray, currentWord, setCurrentWord}


	return (
		<div className="wrapper">
			<Header />
			
			<NavButtons data={{...navData, position: "top"}} />
			 
			<Word data={{...currentWord, array: wordsDataArray}} />
			
			<NavButtons data={{...navData, position: "bottom"}} />
			 
			<Footer />
		</div>
	)
}
