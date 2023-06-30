import  {useContext} from "react";
import { Button, Grid, responsiveFontSizes } from "@mui/material";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Height } from "@mui/icons-material";
import { CurrencyContext } from "../context/CurrencyContext";


 const SwitchCurrency=()=>{
  const{
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency
  }=useContext(CurrencyContext)

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }  
    return(
      <Grid item xs={12} md= "auto">
        <Button onClick={handleSwitch} sx= {{
          borderRadius:1,
          height:"100%"
         }}>
          <CompareArrowsIcon sx={{fontSize:40}}/>
        </Button>
      </Grid>
      
    )
 }
 export default SwitchCurrency
