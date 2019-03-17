# Update CV

[Open the google sheet](https://docs.google.com/spreadsheets/d/11oHYRR6hoVfiitCH0CksoRw5enHJwvgTuDmC4VOrP8o/edit?usp=sharing) and edit your changes. Next download the file as a `.csv` file (file > Download as... > Comma seperated...). Open the file with a text editor Atom or TextEdit and copy it's contents. When you're done with all that you have to look in `_data` folder and find the file you want to edit. Save the data and your changes will be live within minutes.

# Build commands

```bash
bundle install
bundle exec jekyll serve --watch --config _config.yml,_config-dev.yml
```
