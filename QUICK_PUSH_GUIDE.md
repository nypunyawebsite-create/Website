# Quick Push Guide - nypunyawebsite@gmail.com

## ⚡ FASTEST WAY TO PUSH

### Step 1: Create Personal Access Token (2 minutes)

1. **Open:** https://github.com/settings/tokens
2. **Login:** Use `nypunyawebsite@gmail.com` / `NypunyaAdmin@123$$`
3. **Click:** "Generate new token" → "Generate new token (classic)"
4. **Settings:**
   - Name: `Website Push`
   - Expiration: `90 days`
   - Scopes: ✅ Check **`repo`**
5. **Click:** "Generate token"
6. **COPY THE TOKEN** (starts with `ghp_...`)

### Step 2: Push Code

Run this command:
```bash
git push -u origin master
```

**When prompted:**
- Username: `nypunyawebsite-create` (or your GitHub username)
- Password: **Paste your Personal Access Token** (NOT your password)

---

## ✅ CURRENT STATUS

- ✅ Credentials cleared
- ✅ Git configured for: nypunyawebsite@gmail.com
- ✅ Remote set: https://github.com/nypunyawebsite-create/Website.git
- ✅ Credential helper: macOS Keychain (will remember token)

**Ready to push!** Just create your PAT and run `git push -u origin master`
