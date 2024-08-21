import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper } from '@mui/material';
import toDoContentList from "../contents/toDoContentList";
import ReactMarkdown from 'react-markdown';

function TodoContent() {
    return (
        <Paper sx={{marginTop:3, marginBottom:3}}>
            {
                toDoContentList.map((content, index) => <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        id={content.id}
                        sx={{fontWeight:"bold", fontSize:25}}
                    >
                       {index + 1}.{content.AccordionSummary}
                    </AccordionSummary>
                    <AccordionDetails sx={{whiteSpace: 'pre-wrap'}}>
                        <ReactMarkdown>{content.AccordionDetails}</ReactMarkdown> 
                    </AccordionDetails>
                </Accordion>)
            }
        </Paper>
    );
}

export default TodoContent;