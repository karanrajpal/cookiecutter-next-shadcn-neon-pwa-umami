with open('.gitignore', 'a') as gitignore_file:
    gitignore_file.write('\n.env.local')

green = "\033[92m"  # ANSI escape code for green color
reset = "\033[0m"   # ANSI escape code to reset color
checkbox = "✓"      # Unicode character for checkmark

print(f"Cookiecutter Post-Install Script Completed {green}{checkbox}{reset}")
