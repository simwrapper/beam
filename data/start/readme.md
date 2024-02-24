## VTA BEAM Analysis Dashboards

This dashboard is a demo/starting point for analyzing and visualizing simulation outputs from the BEAM model.

There are only a small set of visualizations on display here at the moment, but the system is extensible.

### Exploring this site

Five Stop-to-Stop scenarios and the "Flex" scenario are listed in the top navigation bar.

Explore the animations and the charts on display!

### How this site works

After the BEAM model has finished running, a short Python script processes the output files (mainly using what's known as the "event file"). It collates information into several text files which are stored alongside the simulation outputs.

This site reads those files along with layout information in a configuration folder, and displays the results.

Future runs can be processed in the same manner: a python "pip" package has been created which can be installed locally to produce dashboards for any BEAM simulations.

More information will be provided soon.
