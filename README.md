[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23875688&assignment_repo_type=AssignmentRepo)

Common commands for Neovim, Lazygit, and PowerShell.
---

## 1. Neovim Fundamentals (The "Modes")

Remember: **Always press `Esc**` if you aren't sure what mode you're in.

### Moving & Writing

* **`i`**: Enter **Insert Mode** (to type text).
* **`Esc`**: Return to **Normal Mode** (to move or run commands).
* **`h` / `j` / `k` / `l**`: Left / Down / Up / Right (Use these instead of arrow keys!).
* **`u`**: Undo.
* **`Ctrl + r`**: Redo.

File Explorer Commands (Neo-tree)

Open/Close the explorer with <leader>e (Space + e). While your cursor is inside the explorer:
Managing Files

    a: Add a file or folder. (Tip: Use a / at the end to make it a folder, e.g., src/).

    d: Delete the highlighted file (it will ask for confirmation).

    r: Rename the file.

    y: Copy the file.

    x: Cut the file (used for moving).

    p: Paste the file you copied or cut.

Viewing & Sorting

    H: Toggle Hidden files (files starting with a dot, like .env).

    I: Toggle Ignored files (files listed in your .gitignore).

    R: Refresh the explorer (useful if you added a file outside of Neovim).

    z: Close all open folders (node) to tidy up the tree.

### File Management (LazyVim Shortcuts)

* **`<leader>ff`**: **F**ind **f**ile (search by name).
* **`<leader>e`**: Toggle **e**xplorer (the side tree).
* **`<leader>bb`**: Switch between open **b**uffers (tabs).
* **`<leader>wd`**: **W**indow **d**elete (close a split).

### Essential Commands (Normal Mode)

* **`:w`**: **W**rite (Save).
* **`:q`**: **Q**uit.
* **`:wq`**: Save and Quit.
* **`:q!`**: Quit without saving changes.

---

## 2. Lazygit (The "Command Center")

Open it with **`<leader>gg`** inside Neovim or by typing `lazygit` in your terminal.

* **`1` / `2` / `3` / `4**`: Jump between panels (Files, Branches, Commits, Remotes).
* **`Space`**: **Stage** (select) a file or a line of code.
* **`c`**: **C**ommit changes (opens a box to type your message).
* **`P`** (Shift + P): **P**ush changes to GitHub.
* **`p`** (lowercase): **P**ull changes from GitHub.
* **`d`**: **D**elete/Discard changes in a file (Be careful!).
* **`q`**: Exit Lazygit.

---

## 3. Terminal Essentials (PowerShell)

Use these before you open Neovim to get to the right spot.

* **`cd <path>`**: **C**hange **d**irectory (e.g., `cd Documents/Uni`).
* **`ls`**: **L**i**s**t files in the current folder.
* **`ls -a`**: List **all** files (including hidden ones like `.gitignore`).
* **`pwd`**: **P**rint **w**orking **d**irectory (Where am I right now?).
* **`mkdir <name>`**: **M**a**k**e a new **dir**ectory (folder).
* **`clear`**: Clean up the terminal screen.

---

## 4. University/Coding Workflow

Commands you'll use for your **C++** and **Web** projects:

### C++ (MinGW/GCC)

* **`g++ main.cpp -o main`**: Compile your code into a program called `main.exe`.
* **`./main`**: Run your compiled program.

### Web (Next.js/Node)

* **`npm install`**: Download the project dependencies (do this after cloning a repo).
* **`npm run dev`**: Start the local development server to see your website.

---

## 5. The "I'm Stuck" Cheat Sheet

* **Neovim is frozen?** Press `Ctrl + c`.
* **Lazygit isn't showing the file?** Press `R` to refresh.
* **Terminal says "Command not found"?** Make sure you are in the right folder or check your Path.
* **Forgot a shortcut in Neovim?** Press **`<leader>sk`** (**s**earch **k**eymaps) to see every shortcut available.

> **Pro Tip:** In Neovim, if you ever forget what a key does, type `:help <key>` (e.g., `:help dd`) to see the official manual.

Moving Between Windows (Splits)

When you have the File Explorer open on the left and your code on the right, you have two "windows" (or splits).

    Ctrl + h: Move to the window on the left (usually the Explorer).

    Ctrl + l: Move to the window on the right (your Code).

    Ctrl + j: Move to the window below.

    Ctrl + k: Move to the window above.

    Note: If you are in the File Explorer and press Enter on a file, Neovim will automatically jump your cursor into the code window for that file.

Resizing Windows

Sometimes the File Explorer is too wide, or you want your side-by-side code splits to be different sizes.

    <leader>w=: Make all windows equal size.

    Ctrl + w followed by >: Make the current window wider.

    Ctrl + w followed by <: Make the current window narrower.

    Ctrl + w followed by + or -: Make the window taller or shorter.

Managing Tabs (Buffers)

In Neovim, "Tabs" are actually called Buffers. You'll see them listed at the very top of your screen.

    [b: Go to the previous buffer (left).

    ]b: Go to the next buffer (right).

    <leader>bd: Buffer Delete (closes the current file without closing Neovim).

    <leader>bb: Switch between recently opened buffers using a list.
