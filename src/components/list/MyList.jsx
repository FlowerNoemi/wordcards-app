import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

const MyList = ({ allcard, onChange, checked }) => {
  const { id, lesson } = allcard;
  const labelId = `checkbox-list-secondary-label-${id}`;

  return (
    <ListItem
      secondaryAction={
        <Checkbox
          edge="end"
          inputProps={{ "aria-labelledby": labelId }}
          onChange={onChange}
          checked={checked}
        />
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemText id={labelId} primary={lesson} />
      </ListItemButton>
    </ListItem>
  );
};
export default MyList;
