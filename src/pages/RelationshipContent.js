import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper } from '@mui/material';
import relationshipcontents from '../contents/relationshipContentList';
import ReactMarkdown from 'react-markdown';

function RelationshipContent() {
    return (
        <Paper sx={{marginTop:3, marginBottom:3}}>
            {
                relationshipcontents.map((content, index) => <Accordion>
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

export default RelationshipContent;