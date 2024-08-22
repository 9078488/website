import { Container, Paper, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactMarkdown from 'react-markdown';


function AccordionTemplate({ params }) {
    return (
        <Container
        component="main" 
        maxWidth="sm"
        >
            <Paper
                sx={{ textAlign: 'center', mt:1}}
                elevation={3}               
                >
                <Typography variant="h4" component="h1">{params.pageTitle}</Typography>
            </Paper>
            {params.pageContent.map((pageContent,index) => 
                <Paper sx={{marginTop:3, marginBottom:3}}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                id={pageContent.id}
                                sx={{fontWeight:"bold", fontSize:25}}
                            >
                            {index + 1}.{pageContent.AccordionSummary}
                            </AccordionSummary>
                            <AccordionDetails sx={{whiteSpace: 'pre-wrap'}}>
                                <ReactMarkdown>{pageContent.AccordionDetails}</ReactMarkdown> 
                            </AccordionDetails>
                        </Accordion>
                </Paper>
                )
            }  
        </Container>
    );
}

export default AccordionTemplate;