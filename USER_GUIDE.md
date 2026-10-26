# SVS De-ID

Whole slide images, including Aperio SVS files, can potentially contain patient identifiers on the slide label (and rarely visible on the macro image). This tool allows users to remove these potentially identifying sub-images to enable sharing files safely for research purposes.

## How to install and run the application

The de-identification tool uses an app-mode browser window with HTML5/CSS3/JavaScript for the user interface, with Python3 under the hood. The code can be compiled into stand-alone executable applications and run using Windows, Mac, or Linux. For the latest Windows or Mac version, contact biniyamkahsay.mezgeb@ucalgary.ca (DPLM, University of Calgary).

Depending on the operating system and user permissions, you may need to take special steps to allow the application to run. For example, on MacOS, running the app will fail the first time, but after doing this, the app can be enabled in Security settings (see [this page](https://support.apple.com/en-us/HT202491) for details).

#### Chrome vs QWebEngine

There are two version of the application:
- Chrome: Uses a Google Chrome window for the user interface (Microsoft Edge is a fallback for Windows 10 users)
- QWebEngine: Entirely stand-alone, with a built-in web browser.

Try them both - the de-identification works exactly the same in both, but the app icons appear differently in the system tray.

## How to use the application

Use the tabs at the top of the user interface to choose which mode you want to use.

- **Copy** mode leaves the original file(s) unchanged, and creates a new copy which does not contain label and macro images. This is most useful when working with whole slide images created for other purposes (e.g. clinical use).
- **Modify** mode changes the original file. If you have already copied the file(s) manually, or only included the label/macro images by mistake while scanning, this is the right mode.

Files to de-identify can be added in two ways: (1) by directly selecting one or more .svs files; or (2) by selecting a .csv file that has a list of .svs filenames (including the path). The second option is most useful when a subset of images need to be copied. Therefore, the csv file must be formatted in a certain way ([see below](#CSV-file-format)).

Notes:
- In **copy** mode, you will be asked to select a location to copy the files into. This allows directly copying onto a removeable hard drive or USB drive to transfer files to end users. Select the base directory you want to start from. If destination file names are prefixed with a path, any necessary folders will be created.
- In **modify** mode, you will require appropriate filesystem permissions in order to alter the files.

#### <a name="CSV-file-format"></a>CSV file format

The file should consist of two columns. The first row contains the column headers, "source" and "destination".
 Each subsequent row should have the path to an existing .svs file in the "source" column and the desired file name (path is optional) in the "destination" column.

 For example:

 ```  
    source,                              destination  
    /path/to/files/slide1.svs,           slide1.svs  
    /path/to/files/subdir/slide2.svs,    case1/h_and_e.svs  
 ``` 
 *Note:  Even in **modify** mode, the file should be formatted with these two columns, but you can leave destination file names blank.*

