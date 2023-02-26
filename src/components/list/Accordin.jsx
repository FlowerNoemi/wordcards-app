import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import MyList from "../../components/list/MyList";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/Theme";

const Accordin = ({
  categoryChoose,
  handleToggle,
  allCards,
  checked,
  categorya,
  key,
}) => {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div>
        {categorya.map((cat, id) => {
          return (
            <ThemeProvider theme={theme} key={id}>
              <Accordion
                key={id}
                expanded={expanded === `panel_${cat.id}`}
                onChange={handleChange(`panel_${cat.id}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  onClick={() => categoryChoose(cat.id)}
                >
                  <Typography>{cat.category}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <div>
                    <List
                      dense
                      sx={{
                        width: "100%",
                        maxWidth: 300,
                        bgcolor: "background.paper",
                      }}
                    >
                      {allCards.map((allcard, id) => {
                        return (
                          <MyList
                            key={id}
                            allcard={allcard}
                            onChange={handleToggle(allcard.id)}
                            checked={checked.indexOf(allcard.id) !== -1}
                          />
                        );
                      })}
                    </List>
                  </div>
                </AccordionDetails>
              </Accordion>
            </ThemeProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Accordin;
