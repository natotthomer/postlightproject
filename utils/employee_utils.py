import random

def generate_random_department_and_title():
    options = {
        'Engineering': [
            'Full Stack Engineer',
            'Senior Web Developer',
            'Lead DevOps Engineer',
            'QA Engineer',
            'CTO'
        ],
        'Marketing': [
            'Strategy Architect',
            'Senior Branded Content Analyst',
            'Client Relations Manager',
            'Product Marketing Manager',
            'Outbound Marketing Contractor'
        ],
        'Public Relations': [
            'Account Executive',
            'Director of Communications',
            'Director of External Affairs'
        ],
        'Finance': [
            'Senior Finance Project Manager',
            'Financial Analyst',
            'Fintech Architect',
            'Deputy Finance Manager',
            'Staff Accountant'
        ],
        'Human Resources': [
            'Chief HR Officer',
            'Assistant',
            'Manager',
            'Director',
            'VP'
        ],
        'Information Technology': [
            'Lead Architect',
            'Junior Architect',
            'Security Specialist'
        ]
    }

    random_department = random.choice(list(options))
    random_title = random.choice(options.get(random_department))

    return {
        'department': random_department,
        'title': random_title
    }
