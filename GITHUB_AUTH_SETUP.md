# GitHub Authentication Setup

**Account:** nypunyawebsite@gmail.com  
**Repository:** https://github.com/nypunyawebsite-create/Website.git

---

## ⚠️ IMPORTANT: GitHub No Longer Accepts Passwords

GitHub requires **Personal Access Tokens (PAT)** for HTTPS authentication. Your password won't work.

---

## 🔑 STEP 1: Create Personal Access Token

1. **Go to GitHub Token Settings:**
   - Open: https://github.com/settings/tokens
   - Login with: `nypunyawebsite@gmail.com` / `NypunyaAdmin@123$$`

2. **Generate New Token:**
   - Click **"Generate new token"** → **"Generate new token (classic)"**
   - Name: `Nypunya Website Push`
   - Expiration: Choose your preference (90 days recommended)
   - Select scopes:
     - ✅ **`repo`** (Full control of private repositories)
     - ✅ **`workflow`** (if you use GitHub Actions)

3. **Generate and Copy Token:**
   - Click **"Generate token"**
   - **⚠️ COPY THE TOKEN IMMEDIATELY** (you won't see it again!)
   - It will look like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

## 🚀 STEP 2: Push Using Token

Once you have the token, run:

```bash
git push -u origin master
```

When prompted:
- **Username:** `nypunyawebsite-create` (or your GitHub username)
- **Password:** Paste your Personal Access Token (NOT your password)

---

## 🔒 ALTERNATIVE: Store Token Securely (Optional)

If you want to avoid entering the token every time:

```bash
# Store token in macOS Keychain
git config --global credential.helper osxkeychain

# Then push (will prompt once, then remember)
git push -u origin master
```

---

## ✅ VERIFICATION

After successful push, verify:

```bash
git remote -v
git log --oneline -1
```

---

**Ready to push?** Create your PAT and run `git push -u origin master`
