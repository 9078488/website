import { Container, Typography, Paper } from '@mui/material';
import TodoContent from "./TodoContent";



function Todo() {
    return (
        <Container
            component="main" 
            maxWidth="sm"
        >
            <Paper 
                sx={{ textAlign: 'center', mt:1}}
                elevation={3}
            >
                <Typography variant="h4" component="h1">Todos</Typography>
            </Paper>
            <TodoContent />
        </Container>
    );
}

export default Todo;