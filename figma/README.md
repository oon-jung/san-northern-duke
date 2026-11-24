# Figma import

Run san-import.js with the Scripter community plugin in the Collection of Designs file. The script adds a new V2 section to 01 · Web and refuses to overwrite an existing V2 section. It embeds the prepared reference, text-free backgrounds, native text measurements, and analysis. No credentials or external network calls are embedded in the importer.

Live interaction stays on GitHub Pages; Figma contains the static design record. Confirm visual appearance and copy the printed node link before marking the upload complete.

Completed Figma record: https://www.figma.com/design/BnDcWitGbxABphoNNqjXhQ/?node-id=11-19 (desktop), node-id=11-45 (mobile).

When evaluating the importer through Scripter, print its returned link in the caller: `print(await eval(await fetchText(scriptUrl)))`. Do not rerun in the same file: the duplicate-section guard intentionally stops it.
