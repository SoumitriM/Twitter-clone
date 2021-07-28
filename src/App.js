import { ThemeProvider } from "@material-ui/styles";
import NewTweet from "./NewTweet";
import Navigation from "./Navigation";
import Tweets from "./Tweets";
import theme from "./Theme";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item md={3}>
          <Navigation />
        </Grid>
        <Grid item md={6}>
          <NewTweet />
          <Tweets />
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
