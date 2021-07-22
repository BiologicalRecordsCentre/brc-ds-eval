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








