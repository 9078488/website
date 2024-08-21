import { Container, Typography, Paper } from '@mui/material';
import RelationshipContent from "./RelationshipContent";

function Relationship() {
    return (

        <Container
            component="main" 
            maxWidth="sm"
        >
            <Paper 
                sx={{ textAlign: 'center', mt: 1}}
                elevation={3}
            >
                <Typography variant="h4" component="h1">人际关系</Typography>
            </Paper>
            <RelationshipContent />
        </Container>
    ); 
}

export default Relationship;