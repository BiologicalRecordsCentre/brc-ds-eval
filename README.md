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
The *Summary tool* summarises The data for each taxon in the file in a table.

If two
files are loaded and configured, and you have checked both of the,
*Display dataset* checkboxes, you will see two tables side by side. Otherwise
you will only see one table.

You must map the *Taxon* field for this tool to work. For each taxon found
in the file, the tools will count the number of records for that taxon. 

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

The *Download CSV* button can be used to download a CSV representation
of the table you can see (two files are download if you are viewing
two tables).

### The Phenology tool
The *Phenology tool* displays a thumbnail phenology chart for each of the taxa 
in your file.

This tool requires both the *Taxon* and *Date* fields to be mapped. (This
is a temporal visualisation - there is no spatial element which is why
grid reference is not required.)

The *Display dataset* controls allow you show charts for one or both
(if you have loaded two files), and optionally to display matching taxa
in each of the files in the same chart (use the *Combine display*
checkbox for that).

By default the charts shows **weekly record counts**. However you can
select the *Proportion of record counts* if you want to convert those 
absolute weekly record counts to a figure that represents the proportion
of the whole count, for that taxon, that the weekly figure represents.
When you do this, you will see the figures on the y axis change, but 
for charts displaying data from a single file, the shape of the phenology
curve will not change. This is most useful when you are comparing two
data from two different files in one chart (combined display). If the total
number of records for a taxon differ widely between those two files, then
it can be hard to compare the pehonology in a single chart if charting
absolute numbers - switching to proportions can help in that case.

In the *Phenology chart options* there is also a filter that allows you
to filter the displayed thumbnail charts to just a subset of the taxa
based on a some text which you type in (before clicking the *Apply* button).

### Time series
The *Time series tool* displays at thumbnail bar chart, for each taxon in
your file, showing the number of records recorded each year.

This tool requires both the *Taxon* and *Date* fields to be mapped. (This
is a temporal visualisation - there is no spatial element which is why
grid reference is not required.)

The *Display dataset* controls allow you show charts for one or both
(if you have loaded two files), and optionally to display matching taxa
in each of the files in the same chart (use the *Combine display*
checkbox for that).

By default the charts shows **total yearly record counts**. However
you can also switch from counts of records to counts of unqiue 'visits'.
In the context of this tool a 'visit' is a unique combination of 1km square
and date. So several records made on the same day within same 1km square will
only count as a single visit - *even if their precise grid references are
different*. This is an important concept in occupancy modelling, which is
the reason it is inlcuded as an option in this tool.

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













