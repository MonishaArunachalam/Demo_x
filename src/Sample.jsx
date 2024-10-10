import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Sample() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
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
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
