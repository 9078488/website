import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper } from '@mui/material';
import contents from './contentList';
import ReactMarkdown from 'react-markdown';

function FaithContent() {
    return (
        <Paper sx={{marginTop:3}}>
            {
                contents.map((content, index) => <Accordion>
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

export default FaithContent;