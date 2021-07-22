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

### Loading your data
Although this tool is deployed as a web page, all of the code runs entirely in your
own browser. When you load data in the tool, it doesn't leave your own computer - it is
*not* uploaded to a website. So your data is secure.

On the *Load* tab you can select one or two CSV files of biological records. Use the
*Choose File* buttons to select the files. When you've selected a file, you will see
the red text that says <span style="color:red">**No file loaded**</span>




