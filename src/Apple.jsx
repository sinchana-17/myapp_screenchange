//funtion n file name should be capital
import './Apple.css'

const Orange=()=>
{
    return(
        <h2>oranges are good for health</h2>
        )
    }

function Apple()
{
    return(
        <div>Hello world
            <Orange/>
            </div>
        )
    }
//used to connect the main file
export default Apple;
