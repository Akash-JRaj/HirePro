import { Box, Button, Card, Grid, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Feed() {

    const[post, setPost] = useState()
    const[query, setQuery] = useState("")



    useEffect(() => {
        const fetchAllPosts = async() => {
            const response = await axios.get(`http://localhost:8080/posts`)
            setPost(response.data)
            console.log(response.data)
        }

        const fetchPostForQuery = async() => {
            const response = await axios.get(`http://localhost:8080/posts/${query}`)
            setPost(response.data)
            console.log(response.data)
        }

        if(query.length === 0) fetchAllPosts();
        if(query.length > 2) fetchPostForQuery();
    }, [query])
    
        
    
    return (
        <>

            <Grid container spacing={2} sx={{margin : "2%"}} color={"black"}>
                <Grid item xs={12} sx={12} md={12} lg={12}>
                    <Button sx={{margin : "1% 2%"}} variant="outlined">
                        <Link to="/">Home</Link>
                    </Button>
                    <Box>
                        <input type="search" placeholder="Search here" onChange={(e) => setQuery(e.target.value)}/>
                    </Box>
                </Grid>

                {post && post.map((p) => {
                    return(
                        <Grid key={p.id} item xs={12} md={6} lg={4}>
                            <Card>
                                <Typography>
                                    {p.profile}
                                </Typography>
                                <Typography>
                                    Description : {p.desc}
                                </Typography>
                                <Typography>
                                    Years of experience : {p.exp}
                                </Typography>
                                <Typography>
                                    Tech stack : 
                                </Typography>
                                {p.techs.map((s, i) => {
                                    return(
                                    <Typography variant="body" key={i}>
                                        {s} . {` `}
                                    </Typography>
                                    )
                                })}
                            </Card>
                            
                        </Grid>
                    )
                })}

            </Grid>
        </>
    )
}
