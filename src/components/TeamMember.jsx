import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Facebook, Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AddMember({ faceimage, name, propos }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Card className="teamCard" sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            IA
          </Avatar>
        }
        title={
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            toemeXpertise co-founder
          </Typography>
        }
        subheader={name}
      />

      <CardMedia
        component="img"
        style={{ maxHeight: "350px" }}
        image={faceimage}
        alt="Data Scientist"
      />

      <CardContent>
        <Typography
          variant="body2"
          color="text.black"
          fontSize={17}
          fontWeight={"bolder"}
        >
          Data Scientist, AI & Software Engineer
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="Facebook" style={{ color: "#3b5998" }}>
          <Facebook />
        </IconButton>
        <IconButton aria-label="Twitter" style={{ color: "#1DA1F2" }}>
          <Twitter />
        </IconButton>
        <IconButton aria-label="LinkedIn" style={{ color: "#0077B5" }}>
          <LinkedIn />
        </IconButton>
        <IconButton aria-label="GitHub" style={{ color: "#333" }}>
          <GitHub />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Plus d'infos:</Typography>
          <Typography paragraph>{propos}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default AddMember;
