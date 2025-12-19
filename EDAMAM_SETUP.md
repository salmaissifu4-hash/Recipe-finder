# Edamam API Setup Instructions

## Get Your Free API Keys

1. **Visit Edamam Developer Portal**
   - Go to https://developer.edamam.com/
   - Click "Sign Up" to create a free account

2. **Choose the Nutrition Analysis API**
   - After signing up, go to your Dashboard
   - Select "Nutrition Analysis API"
   - Choose the free tier (allows 100 calls/month)
   - Click "Get API Key"

3. **Copy Your Credentials**
   - You'll receive an `APP ID` and `APP KEY`
   - Keep these secure

4. **Add to Your Project**
   - Open the `.env` file in your project root
   - Add your credentials:
     ```
     VITE_EDAMAM_APP_ID=your_app_id_here
     VITE_EDAMAM_APP_KEY=your_app_key_here
     ```

5. **Restart Development Server**
   ```bash
   npm run dev
   ```

## Features

Once configured, nutrition information will automatically display on recipe detail pages including:
- Calories per serving
- Protein, Carbs, Fat
- Fiber and Sodium
- Number of servings

## Free Tier Limits

- 100 API calls per month
- Nutrition data is cached per recipe
- If you exceed the limit, recipes will still work but won't show nutrition info

## Troubleshooting

If nutrition data doesn't appear:
1. Verify your API keys are correct in `.env`
2. Restart the dev server after adding keys
3. Check browser console for any errors
4. Ensure you haven't exceeded the free tier limit
