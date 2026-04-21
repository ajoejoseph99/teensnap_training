## Open a blank file named mockData.json.

## Base Prompt

Open Copilot Chat and enter the following prompt:

```bash
Generate a JSON array of 5 user objects for a registration system. Each object should include the fields: username, email, and age.
```

## The "Chaos" Injection

Once it generates the clean data, follow up with:

```bash
Now, regenerate this list but make it difficult to parse.
One username should be 200 characters long.
One email should have special characters like !#%^&*().
One age should be a string instead of a number.
One user should have an emoji in their name.
```

## The Format Pivot

After you have your "messy" JSON, type:

```bash
Convert this into a CSV format so I can use it for a Load Test in JMeter.
```

## The "Schema" Generator

If you have a CSV but no database, ask

```bash
Based on this CSV data, write a SQL CREATE TABLE script with appropriate data types and constraints.
```
