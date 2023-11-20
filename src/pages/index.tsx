import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google'
import Head from "next/head"
import Header from '@/components/Header/Header';
import { Autocomplete, Chip, Paper, Slider, TextField, styled } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from '@/components/Footer/Footer';
import { contentTypes } from '@/utility/data';

const inter = Inter({ subsets: ['latin'] })
const options = ['Option 1', 'Option 2'];


const PrettoSlider = styled(Slider)({
  color: 'linear-gradient(90deg, #00FF00 0%, #FF0000 100%)',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    backgroundImage: 'linear-gradient(to right, #523FD7, #FF7DFF)',
  },
  '& .MuiSlider-rail': {
    height: 8,
    borderRadius: 4, // add this to round the corners of the rail
    backgroundColor: '#3A3940', // set the background color to gray
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: '#523FD7',
    padding: '2px 2px',
    width: 33,
    height: 22,
    borderRadius: '10px',
    backgroundColor: 'linear-gradient(90deg, #00FF00 0%, #FF0000 100%)',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(0deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(0%, -100%) rotate(0deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(0deg)',
    },
  },
});

export default function Home() {
  const [activeOption, setActiveOption] = useState(0);
  const [selectedDis, setSelectedDis] = useState();
  const [allData, setAllData] = useState(contentTypes);
  const [value, setValue] = React.useState<string | null>();
  const [inputValue, setInputValue] = React.useState('');

  return (
    <>
      <Head>
        <title>Frontend Task</title>
        <meta name="Home" content="Frontend Task" />
      </Head>
      <div className='content-root'>
        <Header />
        <div className='content-header'>
          <h2 className='content-head font-poppins'>Content type</h2>
          <p className='content-subHead text-white font-poppins'>Choose a content type that best fits your needs.</p>
        </div>
        <div className='questions-root'>
          <h1 className='question-head font-poppins select-question'>What type of content are you creating?</h1>
          <div className='options-root mt-4 sm:mt-7'>
            {allData.map((i, index)=>{
              return(
                <div key={index} className={`option-div rounded-full flex text-sm font-poppins justify-center items-center px-8 text-white ${selectedDis?.title === i.title ? 'activeOpt' : '' }`} onClick={()=>{setSelectedDis(i)}}>{i.title}</div>
              )
            })}
            
            {/* <div className={`option-div rounded-full flex text-sm font-poppins justify-center items-center px-8 text-white`}>Education</div> */}
          </div>

        </div>
        <div className='questions-root'>
          <h1 className='question-head font-poppins select-question'>Which type of “Fun” content do you want to create?</h1>
          <div className='mt-5 select-div'>
            <Autocomplete
              value={value}
              onChange={(event: any, newValue: string | null) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={selectedDis?.options}
              className='autoComplete-width'
              sx={{ color: "white" }}
              renderInput={(params) => <TextField {...params} label="" sx={{ color: 'white', background: '#3A3940', borderRadius: '15px' }} InputProps={{
                ...params.InputProps,

                classes: {
                  focused: 'focus-class', // Define your own focused class
                },
                placeholder: 'Search',
                style: { color: 'white' },
              }} />}
              PaperComponent={({ children }) => (
                <Paper style={{ backgroundColor: '#3A3940', marginTop: '10px', borderRadius: '10px', color: 'white' }}>
                  {children}
                </Paper>
              )}
              clearIcon={<ClearIcon style={{ color: 'white' }} />} // Set the color of the clear icon
              popupIcon={<KeyboardArrowDownIcon style={{ color: 'white' }} />}
            />
          </div>
        </div>
        <div className='questions-root'>
          <h1 className='question-head font-poppins select-question'>Set the number of words for output text.</h1>
          <div className='slider-div'>
            <p className='text-sm text-white mt-2'>100</p>
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={700}
              min={100}
              max={1000}
            />
            <p className='text-sm text-white mt-2'>1000</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
