## BRC dataset evaluation and comparison tool
The BRC dataset evaulation and comparison tool is actually a suite of
tools designed to help you quickly visualise and evaluate
CSV files of biological records. You can use it with single CSV
files, but many of the tools are also designed to allow you to
compare and contrast two separate CSV files.

This help text is also displayed on the *Help* tab in the tool itself.

Run the tool here: [https://biologicalrecordscentre.github.io/brc-ds-eval/](https://biologicalrecordscentre.github.io/brc-ds-eval/)

### Data preparation
Beyond the requirement that files must be Comma Separated Values (CSV), there
is no requirement for you to use certain column names in the files. Instead, we've
taken the approach that you
map some of the column names in your CSV file to concepts that the tool
understands, e.g. *Grid ref*, *Date* etc (see section on data loading), when
you load the file. That way you don't have to create a version of your CSV file(s)
specifically for this tool.

#### Dates and grid references
There are some restrictions on the type of spatial references and dates that 
this tool can handle. Only grid references (British, Irish or Channel Islands)
are handled - lat, lon is not handled. The tools do not support the use of
vague dates or date ranges - they work with dates specified in either of these
two formats:
 - yyyy-mm-dd
 - dd-mm-yyyy
 
Note however that any delimeter can be used to separate the year, month and day
parts, so long as it is only a single character.

Records that have dates or grid references that the tool does not understand 
are simply ignored (by tools where those fields are required). The *Load*
page will also give a summary of the number of 'invalid' dates and grid
references found (see below).

### Loading your data
Although this tool is deployed as a web page, all of the code runs entirely in your
own browser. When you load data in the tool, it doesn't leave your own computer - it is
*not* uploaded to a website. So your data is secure.

On the *Load* tab you can select one or two CSV files of biological records. Use the
*Choose File* buttons to select the files. When you've selected a file and
the file is loaded, you will see
the red text that says <span style="color:red">**No file loaded**</span> change
to blue text that says <span style="color:blue">**File loaded - n records**</span>
(*n* replaced with the number of records in the file). However, at this point
the tool still can't use your data because 
you must first set the column confirguration 
which means matching some of the columns in your file to concepts that the tool
understands. This is indicated by the red 
<span style="color:red">**No config set**</span> text visible below the field
mapping drop-downs.
 The full list of field mapping dropdowns is:
 - Taxon
 - TVK
 - Grid ref
 - Date
 - Recorder
 - Verifier
 - Verified status
 - Source

Each drop-down contains a full list of the fields found in your CSV file. You
have to select the field from the file that corresponds to the field
concept. For example, your CSV may contain a field *SpeciesName* which indicates
the taxon recorded and this should be selected from the field drop-down labelled 
*Taxon*.

Not all of these fields have to be mapped - it depends on which of the available
tools you wish to use and, in some cases, now you want to use the tool. See the section on each tool to see which fields must be mapped.

Once you have mapped any required fields, you can click the *Set config* button.
When you've done that, the text changes colour to blue and says
<span style="color:blue">**Config is set**</span>. To the right of any
field mappings you have made are some summary stats for the field showing,
for example, how many uniques values there are for that field and how many
records have no data for that field. For *Date* and *Gred ref* you also see
if there were any invalid values in those fields.

To change the field mappings, click the *Clear config* button, update your
mappings using the dropdowns and then click the *Set config* button again.

### The Summary tool
The *Summary tool* summarises The data for each taxon in a dataset in a table.

If two
datasets are loaded and configured, and you have checked both of the,
*Display dataset* checkboxes, you will see two tables side by side. Otherwise
you will only see one table.

You must map the *Taxon* field for this tool to work. For each taxon found
in the dataset, the tools will count the number of records for that taxon. 

If
you also specify the *Date* field, then the table will also show the minimum
and maximum years present in the records for each taxon.

If TVK (Taxon Version Key) field is set, then the tool will look for a match
with the TVKs stored in a JNCC taxon designation list and reports any designation
found against that taxon.

The fields, *Recorder*, *Verifier*, *Verified status* and *Source*, if
specified, can be used to group the records in the summary tables. If
you have specified one of these fields and select the corresponding 
radio button in the *Group records by* control, then the table will be
sub-divided horizontally into collapsible groups representing unique
values of the selected field.

Records in the table can be sorted based on the values in any column
by clicking on the column header. By default they are sorted in
ascending order - click on the column again to sort in descending order.
In addition columns containing are provided with a filter box where you 
can type a filter to the records in the table.

The *Download CSV* button can be used to download a CSV representation
of the table you can see (two files are download if you are viewing
two tables). The download respects any sorting and filtering you have
applied.

### The Phenology tool
The *Phenology tool* displays a thumbnail phenology chart for each of the taxa 
in your dataset.

This tool requires both the *Taxon* and *Date* fields to be mapped. (This
is a temporal visualisation - there is no spatial element which is why
grid reference is not required.)

The *Display dataset* controls allow you show charts for one or both
(if you have loaded two datasets), and optionally to display matching taxa
in each of the datasets in the same chart (use the *Combine display*
checkbox for that).

By default the charts shows **weekly record counts**. However you can
select the *Proportion of record counts* if you want to convert those 
absolute weekly record counts to a figure that represents the proportion
of the whole count, for that taxon, that the weekly figure represents.
When you do this, you will see the figures on the y axis change, but 
for charts displaying data from a single dataset, the shape of the phenology
curve will not change. This is most useful when you are comparing two
data from two different datasets in one chart (combined display). If the total
number of records for a taxon differ widely between those two datasets, then
it can be hard to compare the pehonology in a single chart if charting
absolute numbers - switching to proportions can help in that case.

In the *Phenology chart options* there is also a filter that allows you
to filter the displayed thumbnail charts to just a subset of the taxa
based on a some text which you type in (before clicking the *Apply* button).

### The Time Series tool
The *Time series tool* displays at thumbnail bar chart, for each taxon in
your dataset, showing the number of records recorded each year.

This tool requires both the *Taxon* and *Date* fields to be mapped. (This
is a temporal visualisation - there is no spatial element which is why
grid reference is not required.)

The *Display dataset* controls allow you show charts for one or both
(if you have loaded two datasets), and optionally to display matching taxa
in each of the datasets in the same chart (use the *Combine display*
checkbox for that).

By default the charts shows **total yearly record counts**. However
you can also switch from counts of records to counts of unqiue 'visits'.
For an explanation of what 'visits' mean in the context of this tool,
see the eplanation and the end of the help.

In the *Time series chart options* there is also a filter that allows you
to filter the displayed thumbnail charts to just a subset of the taxa
based on a some text which you type in (before clicking the *Apply* button).

There are also a couple of filter boxes that let you limit the maximum and
minimum years that are displayed on the x-axis of the charts. These options,
particularly the *Min year* option is particularly useful because often
in a dataset there are one or two very early records which can cause
the x-axis of a chart like this to go back a long way - leaving vast
bulk of the records squeezed into a small area on the right of the axis.
To filter the records based on year, just enter a years in one or both
of these boxes and hit the enter key on your keyboard.

### The Overview Map tool
The *Overview map* allows you to create 'atlas style' hectad (10 km square)
distribution maps for Britian and Ireland for individual taxa. Its a quick
way of comparing national coverage for two different datasets (but can also
be used for one dataset only).

This tool requires both the *Taxon* and *Grid ref* fields to be mapped. (This
is a spatial visualisation - there is no temporal element which is why
date is not required.)

To display a map, select a taxon from the drop-down in the *Map options* and
click either the *D1* button to map dataset 1, the *D2* button to map
dataset 2 or the *Both* button to map both datasets.

Note that the taxa in the drop-down list are suffixed with either '1', '2' or
'1,2' to indicate which of the datasets the taxon was found in.

### The Explore Map tool
The *Explore map* allows you to visualise and explore the distribution
for individual taxa at several different levels in an interactive map.

This tool requires both the *Taxon* and *Grid ref* fields to be mapped. (This
is a spatial visualisation - there is no temporal element which is why
date is not required.)

The *Display dataset* checkboxes let you display one or both datesets (if two
datasets are configured). If you are displaying two datasets, they are by 
default displayed in separate maps side by side. But if you check the
*Combine display* checkbox then the two datasets are displayed in the same
map and, for atlas displays (see below), the atlas squares are coloured
to indicate where records from one or the other or both datasets occur.

To display a map, select a taxon from the drop-down in the *Map options* and
click either the *D1* button to map dataset 1, the *D2* button to map
dataset 2 or the *Both* button to map both datasets.

Note that the taxa in the drop-down list are suffixed with either '1', '2' or
'1,2' to indicate which of the datasets the taxon was found in.

By default a hectad (10 km square) atlas map is displayed. But you can
change this using the drop-down to the right of the taxon selection control.
You can choose from any of the following options:
 - Hectad - a 10 km square distribution map
 - Quadrant - a 5 km sqaure distribution map
 - Tetrad - a 2 km square distribution map
 - Monad - a 1 km square distribution map
 - Points - individual (clustered) record points

If one of the atlas levels is selected, then any record with a grid reference
which cannot be unqiuely resolved to a grid reference at the specified 
precision is ignored. For example if you are mapping records from you dataset as tetrads then records
only recorded with a hectad grid reference will be ignored. The
quadrant (5 km square) level is an unusual and rather under-utilised atlas
level. One reason it is under-used is that some tetrad grid reference can
straddle the border between 2 quadrants (or even 4 quadrants for the tetrad
with suffix M) - so be aware that for datasets containing many records with
tetrad grid references may not map well at the quadrant level.

If you select *Points* then individual records are mapped, but in order to
avoid an unresponsive map where the datasets contain a lot of data, a clustering
algorithm is used to combine records into groups. But as you zoom in the
individual records are resolved. Clicking on a individual pin representing
a single record pops up a modal dialog displaying all the attributes for
that record from your original dataset. If you zoom right into a cluster of recrds
which will not resolve to individual points, it is because several records
are mapped at the same location. In this case, click on the cluster and it
will 'spider' to show the individual records which can be selected in the
usual way.

Sometimes, especially when comparing datasets, the clustering may frustrate
you when trying to compare the distribution of a group of records. Where that
is the case, you can check the *Reduce cluster at high zoom* box in the
*Map options* controls. That does what it says on the tin, but using sparingly
because it might affect the performance of your map if there is a lot of data.

Also in the *Map options* is a slider to change the height of the interactive
maps so that you can pick a value best suited to your screen. You can also
change the opacity of the basemap using the *Base opacity* slider. By default
the maps are displayed with a black and white 'Stamen Toner Light' basemap,
but you can use the built in layer control (top-right of the map under the
zoom controls) to change
that to a colour OpenStreetMap basemap if you like.

### The Visit Analyses tool
For an explanation of what 'visits' mean in the context of this tool,
see the eplanation and the end of the help. This tool only provides
useful information when two datasets are compared. It looks at the
overlap, in terms of visits, between the two datasets.

This is both a spatial and temporal analysis so both *Grid ref* and *Date*
fields must be specified, as well as *Taxon*.

Records in the table can be sorted based on the values in any column
by clicking on the column header. By default they are sorted in
ascending order - click on the column again to sort in descending order.
The taxon colum is provided with a filter box where you 
can type a filter to the records in the table.

The *Download CSV* button can be used to download a CSV representation
of the table you can see. The download respects any sorting and filtering you have
applied.

### What are visits?
In the context of this tool a 'visit' is a unique combination of 1km square
and date. So several records made on the same day within same 1km square will
only count as a single visit - *even if their precise grid references are
different*. This is an important concept in occupancy modelling, which is
the reason it is supported in several places in this tool.






