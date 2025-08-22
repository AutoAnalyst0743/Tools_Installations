import { DivideIcon as LucideIcon, Coffee, GitBranch, Eclipse, Lightbulb, Settings, Package, Cloud, Container, Github, UserPlus } from 'lucide-react';

export interface InstallationStep {
  title: string;
  description: string;
  code?: string;
  note?: string;
}

export interface TroubleshootingItem {
  issue: string;
  solution: string;
}

export interface GuideData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  prerequisites?: string[];
  steps: {
    [os: string]: InstallationStep[];
  };
  troubleshooting?: TroubleshootingItem[];
}

export const guides: GuideData[] = [
  {
    id: 'github-account',
    title: 'GitHub Account Setup',
    description: 'Create a GitHub account and set up SSH keys for secure repository access.',
    icon: Github,
    bgColor: 'bg-gray-100',
    iconColor: 'text-gray-800',
    difficulty: 'Beginner',
    estimatedTime: '20 minutes',
    prerequisites: ['Valid email address', 'Git installed on your system'],
    steps: {
      windows: [
        {
          title: 'Create GitHub Account',
          description: 'Visit **[github.com](https://github.com/)** and click "Sign up". Enter your email, create a password, and choose a username.',
          note: 'Choose a professional username as it will be visible in your repositories and contributions.'
        },
        {
          title: 'Verify Email Address',
          description: 'Check your email and click the verification link sent by GitHub.',
          note: 'You may need to check your spam folder if you don\'t see the email immediately.'
        },
        {
          title: 'Complete Profile Setup',
          description: 'Add a profile picture, bio, and other details to make your profile professional.',
          note: 'A complete profile helps with networking and job opportunities.'
        },
        {
          title: 'Generate SSH Key',
          description: 'Open Git Bash and generate an SSH key pair for secure authentication.',
          code: 'ssh-keygen -t ed25519 -C "your_email@example.com"',
          note: 'Press Enter to accept default file location and optionally set a passphrase.'
        },
        {
          title: 'Start SSH Agent',
          description: 'Start the SSH agent and add your private key.',
          code: 'eval "$(ssh-agent -s)"\nssh-add ~/.ssh/id_ed25519'
        },
        {
          title: 'Copy Public Key',
          description: 'Copy your public SSH key to clipboard.',
          code: 'cat ~/.ssh/id_ed25519.pub | clip',
          note: 'This copies the entire public key including the email at the end.'
        },
        {
          title: 'Add SSH Key to GitHub',
          description: 'Go to GitHub Settings > SSH and GPG keys > New SSH key. Paste your public key and give it a title.',
          note: 'Use a descriptive title like "My Windows Laptop" to identify the key later.'
        },
        {
          title: 'Test SSH Connection',
          description: 'Test your SSH connection to GitHub.',
          code: 'ssh -T git@github.com',
          note: 'You should see a message saying you\'ve successfully authenticated.'
        },
        {
          title: 'Configure Git',
          description: 'Set your Git username and email to match your GitHub account.',
          code: 'git config --global user.name "Your Name"\ngit config --global user.email "your_email@example.com"'
        }
      ],
      macos: [
        {
          title: 'Create GitHub Account',
          description: 'Visit **[github.com](https://github.com/)** and sign up with your email, password, and username.',
          note: 'Choose a username that represents you professionally.'
        },
        {
          title: 'Verify Email',
          description: 'Check your email and verify your GitHub account.',
          note: 'Email verification is required to use most GitHub features.'
        },
        {
          title: 'Set Up Profile',
          description: 'Complete your GitHub profile with photo, bio, and location.',
          note: 'A complete profile increases your visibility in the developer community.'
        },
        {
          title: 'Generate SSH Key',
          description: 'Open Terminal and create an SSH key pair.',
          code: 'ssh-keygen -t ed25519 -C "your_email@example.com"'
        },
        {
          title: 'Add Key to SSH Agent',
          description: 'Start SSH agent and add your key.',
          code: 'eval "$(ssh-agent -s)"\nssh-add --apple-use-keychain ~/.ssh/id_ed25519'
        },
        {
          title: 'Copy Public Key',
          description: 'Copy the public key to your clipboard.',
          code: 'pbcopy < ~/.ssh/id_ed25519.pub'
        },
        {
          title: 'Add SSH Key to GitHub',
          description: 'In GitHub Settings, add your SSH key with a descriptive title.',
          note: 'Go to Settings > SSH and GPG keys > New SSH key.'
        },
        {
          title: 'Test Connection',
          description: 'Verify your SSH setup works with GitHub.',
          code: 'ssh -T git@github.com'
        },
        {
          title: 'Configure Git Globally',
          description: 'Set your global Git configuration.',
          code: 'git config --global user.name "Your Name"\ngit config --global user.email "your_email@example.com"'
        }
      ],
      linux: [
        {
          title: 'Create GitHub Account',
          description: 'Visit **[github.com](https://github.com/)** and sign up with your preferred email and username.',
          note: 'Use a professional email address for your GitHub account.'
        },
        {
          title: 'Verify Email Address',
          description: 'Complete email verification from the link sent to your inbox.',
          note: 'Check spam folder if verification email doesn\'t arrive.'
        },
        {
          title: 'Complete Profile',
          description: 'Add profile information, avatar, and bio to your GitHub account.',
          note: 'A well-completed profile helps with professional networking.'
        },
        {
          title: 'Generate SSH Key Pair',
          description: 'Create an SSH key for secure authentication.',
          code: 'ssh-keygen -t ed25519 -C "your_email@example.com"'
        },
        {
          title: 'Start SSH Agent',
          description: 'Initialize SSH agent and add your private key.',
          code: 'eval "$(ssh-agent -s)"\nssh-add ~/.ssh/id_ed25519'
        },
        {
          title: 'Copy Public Key',
          description: 'Display and copy your public SSH key.',
          code: 'cat ~/.ssh/id_ed25519.pub',
          note: 'Select and copy the entire output including the email address.'
        },
        {
          title: 'Add SSH Key to GitHub',
          description: 'Navigate to GitHub Settings > SSH and GPG keys, then add your public key.',
          note: 'Give your key a meaningful title to identify the device.'
        },
        {
          title: 'Test SSH Authentication',
          description: 'Verify your SSH key works with GitHub.',
          code: 'ssh -T git@github.com'
        },
        {
          title: 'Configure Git Identity',
          description: 'Set your Git username and email globally.',
          code: 'git config --global user.name "Your Name"\ngit config --global user.email "your_email@example.com"'
        }
      ]
    },
    troubleshooting: [
      {
        issue: 'SSH key authentication fails',
        solution: 'Ensure your SSH key is added to ssh-agent, verify the public key is correctly added to GitHub, and check that you\'re using the correct email address.'
      },
      {
        issue: 'Permission denied when pushing to repository',
        solution: 'Verify you have write access to the repository, ensure you\'re using SSH URL (not HTTPS), and confirm your SSH key is properly configured.'
      },
      {
        issue: 'Git commands show wrong author information',
        solution: 'Update your global Git configuration with the correct name and email using git config --global commands.'
      }
    ]
  },
  {
    id: 'aws-account',
    title: 'AWS Account Setup',
    description: 'Create an AWS account and configure IAM users for secure cloud service access.',
    icon: UserPlus,
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    difficulty: 'Beginner',
    estimatedTime: '30 minutes',
    prerequisites: ['Valid email address', 'Credit/debit card for verification', 'Phone number for verification'],
    steps: {
      windows: [
        {
          title: 'Create AWS Account',
          description: 'Visit **[aws.amazon.com](https://aws.amazon.com/)** and click "Create an AWS Account". Enter your email and choose a password.',
          note: 'Use a business email if available, as this will be your root account.'
        },
        {
          title: 'Choose Account Type',
          description: 'Select "Personal" for individual use or "Professional" for business use.',
          note: 'Personal accounts have the same features but different billing information requirements.'
        },
        {
          title: 'Enter Contact Information',
          description: 'Provide your full name, address, and phone number for account verification.',
          note: 'This information must be accurate as it may be used for billing and verification.'
        },
        {
          title: 'Add Payment Method',
          description: 'Enter credit card information for account verification and billing.',
          note: 'AWS requires a valid payment method even for free tier usage.'
        },
        {
          title: 'Verify Phone Number',
          description: 'Complete phone verification by entering the code sent via SMS or voice call.',
          note: 'Keep your phone nearby as you\'ll receive a verification code.'
        },
        {
          title: 'Choose Support Plan',
          description: 'Select "Basic Support - Free" for learning purposes.',
          note: 'You can upgrade your support plan later if needed for production workloads.'
        },
        {
          title: 'Access AWS Console',
          description: 'Sign in to the AWS Management Console with your new account.',
          note: 'It may take a few minutes for your account to be fully activated.'
        },
        {
          title: 'Enable MFA for Root Account',
          description: 'Set up Multi-Factor Authentication for your root account security.',
          note: 'Go to IAM > My Security Credentials > Multi-factor authentication (MFA).'
        },
        {
          title: 'Create IAM User',
          description: 'Create an IAM user for daily operations instead of using root account.',
          note: 'Go to IAM > Users > Add user. Give programmatic and console access.'
        },
        {
          title: 'Attach Policies to IAM User',
          description: 'Attach necessary policies like AdministratorAccess for learning purposes.',
          note: 'In production, use more restrictive policies following least privilege principle.'
        },
        {
          title: 'Download Access Keys',
          description: 'Download the CSV file containing Access Key ID and Secret Access Key.',
          note: 'Store these credentials securely - you won\'t be able to see the secret key again.'
        },
        {
          title: 'Install and Configure AWS CLI',
          description: 'Install AWS CLI and configure it with your IAM user credentials.',
          code: 'aws configure',
          note: 'Enter your Access Key ID, Secret Access Key, default region (e.g., us-east-1), and output format (json).'
        }
      ],
      macos: [
        {
          title: 'Sign Up for AWS',
          description: 'Go to **[aws.amazon.com](https://aws.amazon.com/)** and create a new account with your email.',
          note: 'Choose a strong password and consider using a password manager.'
        },
        {
          title: 'Select Account Type',
          description: 'Choose between Personal or Professional account type.',
          note: 'Both types have access to the same AWS services and free tier.'
        },
        {
          title: 'Provide Contact Details',
          description: 'Enter accurate contact information including address and phone.',
          note: 'AWS may use this information for billing and account verification.'
        },
        {
          title: 'Payment Information',
          description: 'Add a valid credit or debit card for account verification.',
          note: 'You won\'t be charged unless you exceed free tier limits.'
        },
        {
          title: 'Phone Verification',
          description: 'Verify your phone number through automated call or SMS.',
          note: 'Have your phone ready to receive the verification code.'
        },
        {
          title: 'Select Support Plan',
          description: 'Choose the Basic (Free) support plan for getting started.',
          note: 'Free tier includes community forums and documentation access.'
        },
        {
          title: 'Complete Account Setup',
          description: 'Wait for account activation and sign in to AWS Console.',
          note: 'Account activation usually takes a few minutes but can take up to 24 hours.'
        },
        {
          title: 'Secure Root Account',
          description: 'Enable MFA on your root account for enhanced security.',
          note: 'Use an authenticator app like Google Authenticator or Authy.'
        },
        {
          title: 'Create IAM User',
          description: 'Set up an IAM user for regular AWS operations.',
          note: 'Never use root account for daily operations - create IAM users instead.'
        },
        {
          title: 'Configure IAM Permissions',
          description: 'Assign appropriate policies to your IAM user.',
          note: 'Start with AdministratorAccess for learning, then restrict as needed.'
        },
        {
          title: 'Set Up AWS CLI',
          description: 'Install AWS CLI using Homebrew and configure with IAM credentials.',
          code: 'brew install awscli\naws configure'
        }
      ],
      linux: [
        {
          title: 'Create AWS Account',
          description: 'Navigate to **[aws.amazon.com](https://aws.amazon.com/)** and sign up for a new account.',
          note: 'Use a dedicated email address for your AWS account if possible.'
        },
        {
          title: 'Account Type Selection',
          description: 'Choose Personal or Professional based on your intended use.',
          note: 'Personal accounts are suitable for learning and individual projects.'
        },
        {
          title: 'Contact Information',
          description: 'Provide complete and accurate contact details.',
          note: 'Ensure all information is correct as it affects billing and support.'
        },
        {
          title: 'Payment Method',
          description: 'Add credit card details for account verification and billing.',
          note: 'Free tier services won\'t incur charges, but a payment method is required.'
        },
        {
          title: 'Identity Verification',
          description: 'Complete phone number verification via call or SMS.',
          note: 'This step is required to prevent fraud and ensure account security.'
        },
        {
          title: 'Support Plan Selection',
          description: 'Select Basic Support (Free) for learning and development.',
          note: 'Basic support includes access to forums, documentation, and basic troubleshooting.'
        },
        {
          title: 'Account Activation',
          description: 'Wait for account activation and access the AWS Console.',
          note: 'You\'ll receive an email confirmation when your account is ready.'
        },
        {
          title: 'Enable Root Account MFA',
          description: 'Set up multi-factor authentication for your root account.',
          note: 'This is a critical security step - use a TOTP app or hardware token.'
        },
        {
          title: 'Create Administrative IAM User',
          description: 'Create an IAM user with administrative privileges for daily use.',
          note: 'Root account should only be used for account-level tasks.'
        },
        {
          title: 'Configure User Permissions',
          description: 'Attach AdministratorAccess policy to your IAM user.',
          note: 'For production, use more granular permissions based on actual needs.'
        },
        {
          title: 'Install and Configure AWS CLI',
          description: 'Set up AWS CLI with your IAM user credentials.',
          code: 'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\naws configure'
        }
      ]
    },
    troubleshooting: [
      {
        issue: 'Account activation is taking too long',
        solution: 'Contact AWS Support if activation takes more than 24 hours. Check that all information provided is accurate and complete.'
      },
      {
        issue: 'Payment method verification fails',
        solution: 'Ensure your card has international transactions enabled, sufficient funds, and matches the billing address exactly.'
      },
      {
        issue: 'Cannot access certain AWS services',
        solution: 'Check if you\'re in the correct AWS region, verify IAM permissions, and ensure the service is available in your selected region.'
      },
      {
        issue: 'AWS CLI configuration errors',
        solution: 'Verify your Access Key ID and Secret Access Key are correct, check region format (e.g., us-east-1), and ensure IAM user has necessary permissions.'
      }
    ]
  },
  {
    id: 'jdk',
    title: 'Java Development Kit (JDK)',
    description: 'Install JDK to develop and run Java applications. Essential for Java development.',
    icon: Coffee,
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    difficulty: 'Beginner',
    estimatedTime: '15 minutes',
    prerequisites: ['Administrator access to your computer'],
    steps: {
      windows: [
        {
          title: 'Download JDK',
          description: 'Visit **[oracle.com/java/technologies/downloads/](https://www.oracle.com/java/technologies/downloads/)** and download the Windows x64 Installer.',
          note: 'Choose the latest LTS version (currently JDK 17 or 21) for stability.'
        },
        {
          title: 'Run the Installer',
          description: 'Double-click the downloaded .exe file and follow the installation wizard.',
          note: 'Keep note of the installation path (usually C:\\Program Files\\Java\\jdk-xx).'
        },
        {
          title: 'Set JAVA_HOME Environment Variable',
          description: 'Right-click "This PC" → Properties → Advanced system settings → Environment Variables. Create a new system variable JAVA_HOME with the JDK installation path.',
          code: 'JAVA_HOME = C:\\Program Files\\Java\\jdk-17'
        },
        {
          title: 'Update PATH Variable',
          description: 'Edit the PATH system variable and add the JDK bin directory.',
          code: '%JAVA_HOME%\\bin'
        },
        {
          title: 'Verify Installation',
          description: 'Open Command Prompt and verify the installation.',
          code: 'java -version\njavac -version'
        }
      ],
      macos: [
        {
          title: 'Download JDK for macOS',
          description: 'Visit **[oracle.com/java/technologies/downloads/](https://www.oracle.com/java/technologies/downloads/)** and download the macOS ARM64 or x64 DMG installer.',
          note: 'Choose ARM64 for Apple Silicon Macs, x64 for Intel Macs.'
        },
        {
          title: 'Install JDK',
          description: 'Open the downloaded .dmg file and run the installer package.',
          note: 'The installer will automatically set up the JDK in /Library/Java/JavaVirtualMachines/.'
        },
        {
          title: 'Set JAVA_HOME (Optional)',
          description: 'Add JAVA_HOME to your shell profile for consistency.',
          code: 'export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home\nexport PATH=$JAVA_HOME/bin:$PATH'
        },
        {
          title: 'Verify Installation',
          description: 'Open Terminal and verify the installation.',
          code: 'java -version\njavac -version'
        }
      ],
      linux: [
        {
          title: 'Update Package Manager',
          description: 'Update your package manager to get the latest package information.',
          code: 'sudo apt update'
        },
        {
          title: 'Install OpenJDK',
          description: 'Install OpenJDK using your distribution\'s package manager.',
          code: 'sudo apt install openjdk-17-jdk'
        },
        {
          title: 'Set JAVA_HOME',
          description: 'Add JAVA_HOME to your .bashrc or .profile file.',
          code: 'export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64\nexport PATH=$JAVA_HOME/bin:$PATH'
        },
        {
          title: 'Reload Shell Configuration',
          description: 'Reload your shell configuration or restart your terminal.',
          code: 'source ~/.bashrc'
        },
        {
          title: 'Verify Installation',
          description: 'Verify the Java installation.',
          code: 'java -version\njavac -version'
        }
      ]
    },
    troubleshooting: [
      {
        issue: 'java is not recognized as an internal or external command',
        solution: 'Ensure the JDK bin directory is added to your PATH environment variable and restart your command prompt.'
      },
      {
        issue: 'JAVA_HOME is not set correctly',
        solution: 'Double-check that JAVA_HOME points to the JDK installation directory (not the bin folder) and restart your terminal.'
      }
    ]
  },
  {
    id: 'git-bash',
    title: 'Git Bash',
    description: 'Install Git with Bash emulation for version control and command-line operations.',
    icon: GitBranch,
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600',
    difficulty: 'Beginner',
    estimatedTime: '10 minutes',
    steps: {
      windows: [
        {
          title: 'Download Git for Windows',
          description: 'Visit **[git-scm.com](https://git-scm.com/download/win)** and download the latest Git for Windows installer.',
          note: 'The installer includes Git Bash, Git GUI, and Git integration for Windows.'
        },
        {
          title: 'Run the Installer',
          description: 'Execute the downloaded installer and follow the setup wizard.',
          note: 'Recommended: Choose "Use Git from Git Bash only" for the PATH environment.'
        },
        {
          title: 'Configure Line Ending Conversions',
          description: 'Choose "Checkout Windows-style, commit Unix-style line endings" for compatibility.',
          note: 'This setting ensures proper line ending handling across different operating systems.'
        },
        {
          title: 'Select Terminal Emulator',
          description: 'Choose "Use Windows default console window" or "Use MinTTY" based on preference.',
          note: 'MinTTY provides a better terminal experience with more features.'
        },
        {
          title: 'Complete Installation',
          description: 'Finish the installation and launch Git Bash from the Start menu.',
          code: 'git --version'
        }
      ],
      macos: [
        {
          title: 'Install Using Homebrew (Recommended)',
          description: 'If you have Homebrew installed, use it to install Git.',
          code: 'brew install git'
        },
        {
          title: 'Alternative: Download from git-scm.com',
          description: 'Visit **[git-scm.com](https://git-scm.com/download/mac)** and download the macOS installer and run it.',
          note: 'The installer will install Git and make it available in Terminal.'
        },
        {
          title: 'Verify Installation',
          description: 'Open Terminal and verify Git is installed.',
          code: 'git --version'
        },
        {
          title: 'Configure Git (Optional)',
          description: 'Set up your Git user information for commits.',
          code: 'git config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"'
        }
      ],
      linux: [
        {
          title: 'Install Git via Package Manager',
          description: 'Git is usually pre-installed on Linux. If not, install it using your package manager or visit **[git-scm.com](https://git-scm.com/download/linux)**.',
          code: 'sudo apt install git'
        },
        {
          title: 'Verify Installation',
          description: 'Check if Git is installed correctly.',
          code: 'git --version'
        },
        {
          title: 'Configure Git',
          description: 'Set up your Git user information.',
          code: 'git config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"'
        },
        {
          title: 'Install Additional Tools (Optional)',
          description: 'Install additional Git tools and GUI clients.',
          code: 'sudo apt install gitk git-gui'
        }
      ]
    },
    troubleshooting: [
      {
        issue: 'Git command not found',
        solution: 'Ensure Git is added to your PATH environment variable and restart your terminal or command prompt.'
      },
      {
        issue: 'Permission denied when cloning repositories',
        solution: 'Set up SSH keys or use HTTPS with personal access tokens for authentication.'
      }
    ]
  },
  {
    id: 'eclipse',
    title: 'Eclipse IDE',
    description: 'Install Eclipse IDE for Java development with comprehensive project management features.',
    icon: Eclipse,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    difficulty: 'Beginner',
    estimatedTime: '20 minutes',
    prerequisites: ['Java Development Kit (JDK) 11 or higher'],
    steps: {
      windows: [
        {
          title: 'Download Eclipse IDE',
          description: 'Visit **[eclipse.org/downloads](https://www.eclipse.org/downloads/)** and download the Eclipse Installer.',
          note: 'The installer will help you choose the right Eclipse package for your needs.'
        },
        {
          title: 'Run Eclipse Installer',
          description: 'Launch the downloaded installer and select "Eclipse IDE for Java Developers".',
          note: 'You can also choose other packages like "Eclipse IDE for Enterprise Java Developers" if needed.'
        },
        {
          title: 'Choose Installation Folder',
          description: 'Select the installation directory and Java VM to use.',
          note: 'Make sure to select the JDK you installed earlier, not just the JRE.'
        },
        {
          title: 'Complete Installation',
          description: 'Click Install and wait for the download and installation to complete.',
          note: 'The installer will download the necessary components from the internet.'
        },
        {
          title: 'Launch Eclipse',
          description: 'Start Eclipse and select a workspace directory for your projects.',
          note: 'The workspace is where Eclipse will store your project files and settings.'
        }
      ],
      macos: [
        {
          title: 'Download Eclipse for macOS',
          description: 'Visit **[eclipse.org/downloads](https://www.eclipse.org/downloads/)** and download the macOS version of Eclipse IDE.',
          note: 'Choose the appropriate version for your Mac architecture (Intel or Apple Silicon).'
        },
        {
          title: 'Extract and Install',
          description: 'Extract the downloaded archive and move Eclipse to your Applications folder.',
          code: 'sudo mv eclipse /Applications/'
        },
        {
          title: 'First Launch',
          description: 'Launch Eclipse from Applications. You may need to allow it in Security & Privacy settings.',
          note: 'macOS may warn about opening an app from an unidentified developer.'
        },
        {
          title: 'Set Workspace',
          description: 'Choose a workspace directory when prompted.',
          note: 'You can create multiple workspaces for different project groups.'
        }
      ],
      linux: [
        {
          title: 'Download Eclipse for Linux',
          description: 'Visit **[eclipse.org/downloads](https://www.eclipse.org/downloads/)** and download the Linux x86_64 version.',
          note: 'Choose the tar.gz archive for manual installation.'
        },
        {
          title: 'Extract Eclipse',
          description: 'Extract the downloaded archive to a suitable location.',
          code: 'tar -xzf eclipse-*.tar.gz\nsudo mv eclipse /opt/'
        },
        {
          title: 'Create Desktop Entry',
          description: 'Create a desktop shortcut for easy access.',
          code: 'sudo ln -s /opt/eclipse/eclipse /usr/local/bin/eclipse'
        },
        {
          title: 'Launch Eclipse',
          description: 'Run Eclipse from the terminal or create a desktop launcher.',
          code: 'eclipse'
        }
      ]
    },
    troubleshooting: [
      {
        issue: 'Eclipse won\'t start or shows JVM error',
        solution: 'Ensure you have JDK installed and set JAVA_HOME correctly. Edit eclipse.ini to point to the correct JVM.'
      },
      {
        issue: 'Workspace errors or corruption',
        solution: 'Try starting Eclipse with a new workspace or delete .metadata folder in your workspace (backup first).'
      }
    ]
  },
  {
    id: 'intellij',
    title: 'IntelliJ IDEA',
    description: 'Install IntelliJ IDEA for advanced Java development with intelligent code assistance.',
    icon: Lightbulb,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    difficulty: 'Beginner',
    estimatedTime: '15 minutes',
    prerequisites: ['Java Development Kit (JDK) 11 or higher'],
    steps: {
      windows: [
        {
          title: 'Download IntelliJ IDEA',
          description: 'Visit **[jetbrains.com/idea/download](https://www.jetbrains.com/idea/download/)** and download IntelliJ IDEA Community Edition (free) or Ultimate Edition.',
          note: 'Community Edition is free and sufficient for Java development.'
        },
        {
          title: 'Run the Installer',
          description: 'Execute the downloaded .exe file and follow the installation wizard.',
          note: 'Choose to add IntelliJ IDEA to PATH for command-line access.'
        },
        {
          title: 'Choose Installation Options',
          description: 'Select options like creating desktop shortcut and file associations.',
          note: 'You can associate .java files with IntelliJ IDEA for easy opening.'
        },
        {
          title: 'Complete Installation',
          description: 'Finish the installation and restart your computer if prompted.',
          note: 'Some system integrations may require a restart.'
        },
        {
          title: 'First Launch and Setup',
          description: 'Start IntelliJ IDEA, accept the license agreement, and configure initial settings.',
          note: 'You can import settings from other IDEs or start with default settings.'
        }
      ],
      macos: [
        {
          title: 'Download IntelliJ IDEA for macOS',
          description: 'Visit **[jetbrains.com/idea/download](https://www.jetbrains.com/idea/download/)** and download the macOS DMG installer.',
          note: 'Choose between Community (free) or Ultimate (paid) edition.'
        },
        {
          title: 'Install from DMG',
          description: 'Open the downloaded DMG file and drag IntelliJ IDEA to the Applications folder.',
          note: 'This is the standard macOS installation method.'
        },
        {
          title: 'Launch IntelliJ IDEA',
          description: 'Open IntelliJ IDEA from Applications. Allow it to run if prompted by macOS security.',
          note: 'macOS may require permission to run the application.'
        },
        {
          title: 'Initial Configuration',
          description: 'Complete the initial setup wizard, including theme selection and plugin configuration.',
          note: 'You can always change these settings later in Preferences.'
        }
      ],
      linux: [
        {
          title: 'Download IntelliJ IDEA for Linux',
          description: 'Visit **[jetbrains.com/idea/download](https://www.jetbrains.com/idea/download/)** and download the Linux tar.gz archive.',
          note: 'You can also install via Snap or using JetBrains Toolbox.'
        },
        {
          title: 'Extract and Install',
          description: 'Extract the archive and move it to an appropriate location.',
          code: 'tar -xzf ideaIC-*.tar.gz\nsudo mv idea-IC-* /opt/intellij-idea'
        },
        {
          title: 'Create Symlink',
          description: 'Create a symbolic link for easy command-line access.',
          code: 'sudo ln -s /opt/intellij-idea/bin/idea.sh /usr/local/bin/idea'
        },
        {
          title: 'Launch IntelliJ IDEA',
          description: 'Run IntelliJ IDEA from terminal or create a desktop launcher.',
          code: 'idea'
        }
      ]
    },
    troubleshooting: [
      {
        issue: 'IntelliJ IDEA won\'t start',
        solution: 'Check if JDK is properly installed and JAVA_HOME is set. Try increasing heap size in idea.vmoptions file.'
      },
      {
        issue: 'Performance issues',
        solution: 'Increase heap size in Help > Change Memory Settings, disable unused plugins, and exclude unnecessary folders from indexing.'
      }
    ]
  },
  {
    id: 'jenkins',
    title: 'Jenkins CI/CD',
    description: 'Install Jenkins for continuous integration and deployment automation.',
    icon: Settings,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    difficulty: 'Intermediate',
    estimatedTime: '30 minutes',
    prerequisites: ['Java 11 or 17 (LTS versions)', 'Administrator privileges'],
    steps: {
      windows: [
        {
          title: 'Download Jenkins',
          description: 'Visit **[jenkins.io/download](https://www.jenkins.io/download/)** and download the Windows installer (.msi file).',
          note: 'Choose the LTS (Long Term Support) version for stability.'
        },
        {
          title: 'Run Jenkins Installer',
          description: 'Execute the .msi file and follow the installation wizard.',
          note: 'Jenkins will be installed as a Windows service and start automatically.'
        },
        {
          title: 'Complete Installation',
          description: 'The installer will configure Jenkins to run on port 8080 by default.',
          note: 'Make sure port 8080 is not used by other applications.'
        },
        {
          title: 'Access Jenkins Web Interface',
          description: 'Open a web browser and navigate to http://localhost:8080',
          note: 'Jenkins should be running automatically after installation.'
        },
        {
          title: 'Unlock Jenkins',
          description: 'Find the initial admin password in the Jenkins installation directory.',
          code: 'type "C:\\Program Files\\Jenkins\\secrets\\initialAdminPassword"',
          note: 'This password is automatically generated during installation.'
        },
        {
          title: 'Install Plugins',
          description: 'Choose "Install suggested plugins" for a standard Jenkins setup.',
          note: 'This will install commonly used plugins for most CI/CD scenarios.'
        },
        {
          title: 'Create Admin User',
          description: 'Set up your first admin user account with username, password, and email.',
          note: 'Remember these credentials as you\'ll need them to access Jenkins.'
        }
      ],
      macos: [
        {
          title: 'Install using Homebrew',
          description: 'Install Jenkins using Homebrew or download from **[jenkins.io/download](https://www.jenkins.io/download/)**.',
          code: 'brew install jenkins-lts'
        },
        {
          title: 'Start Jenkins Service',
          description: 'Start the Jenkins service using Homebrew services.',
          code: 'brew services start jenkins-lts'
        },
        {
          title: 'Access Jenkins',
          description: 'Open http://localhost:8080 in your web browser.',
          note: 'Jenkins should start automatically and be accessible on port 8080.'
        },
        {
          title: 'Get Initial Password',
          description: 'Retrieve the initial admin password from the secrets file.',
          code: 'cat ~/.jenkins/secrets/initialAdminPassword'
        },
        {
          title: 'Complete Setup',
          description: 'Follow the web-based setup wizard to install plugins and create admin user.',
          note: 'Choose suggested plugins for a standard installation.'
        }
      ],
      linux: [
        {
          title: 'Add Jenkins Repository',
          description: 'Add Jenkins repository and install using package manager or download from **[jenkins.io/download](https://www.jenkins.io/download/)**.',
          code: 'curl -fsSL https://pkg.jenkins.io/debian/jenkins.io.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null\necho deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null'
        },
        {
          title: 'Update Package List',
          description: 'Update your package list to include Jenkins packages.',
          code: 'sudo apt update'
        },
        {
          title: 'Install Jenkins',
          description: 'Install Jenkins using the package manager.',
          code: 'sudo apt install jenkins'
        },
        {
          title: 'Start Jenkins Service',
          description: 'Start and enable the Jenkins service.',
          code: 'sudo systemctl start jenkins\nsudo systemctl enable jenkins'
        },
        {
          title: 'Access Jenkins',
          description: 'Open http://localhost:8080 in your web browser.',
          note: 'You may need to configure firewall rules to allow access to port 8080.'
        },
        {
          title: 'Get Initial Password',
          description: 'Retrieve the initial admin password.',
          code: 'sudo cat /var/lib/jenkins/secrets/initialAdminPassword'
        }
      ]
    },
    troubleshooting: [
      {
        issue: 'Jenkins won\'t start',
        solution: 'Check Java installation, ensure JAVA_HOME is set correctly, and verify port 8080 is available.'
      },
      {
        issue: 'Cannot access Jenkins web interface',
        solution: 'Check if Jenkins service is running, verify firewall settings, and ensure port 8080 is not blocked.'
      },
      {
        issue: 'Build failures with Java projects',
        solution: 'Configure JDK installations in Jenkins (Manage Jenkins > Global Tool Configuration) and ensure proper Java version in build jobs.'
      },
      {
        issue: 'GitHub integration not working',
        solution: 'Install GitHub plugin, configure GitHub credentials in Jenkins, and ensure webhook URLs are correctly set in GitHub repository settings.'
      },
      {
        issue: 'Docker commands fail in Jenkins jobs',
        solution: 'Add jenkins user to docker group (sudo usermod -aG docker jenkins), restart Jenkins service, and ensure Docker is running.'
      }
    ]
  },
  {
    id: 'docker',
    title: 'Docker',
    description: 'Install Docker for containerization and application deployment.',
    icon: Container,
    bgColor: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    difficulty: 'Intermediate',
    estimatedTime: '25 minutes',
    prerequisites: ['64-bit operating system', 'Administrator privileges', 'Hardware virtualization support'],
    steps: {
      windows: [
        {
          title: 'Download Docker Desktop',
          description: 'Visit **[docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)** and download Docker Desktop for Windows.',
          note: 'Docker Desktop includes Docker Engine, Docker CLI, and Docker Compose.'
        },
        {
          title: 'Run Docker Desktop Installer',
          description: 'Execute the installer and follow the setup wizard.',
          note: 'The installer may require enabling Hyper-V and WSL 2 features.'
        },
        {
          title: 'Enable Required Features',
          description: 'Enable Windows Subsystem for Linux (WSL 2) and Hyper-V if prompted.',
          note: 'A system restart may be required to enable these features.'
        },
        {
          title: 'Start Docker Desktop',
          description: 'Launch Docker Desktop from the Start menu or desktop shortcut.',
          note: 'Docker Desktop will start automatically on system boot by default.'
        },
        {
          title: 'Verify Installation',
          description: 'Open Command Prompt or PowerShell and verify Docker is running.',
          code: 'docker --version\ndocker run hello-world'
        },
        {
          title: 'Configure Docker (Optional)',
          description: 'Access Docker Desktop settings to configure resources, file sharing, and other preferences.',
          note: 'You can adjust CPU, memory, and disk space allocation for Docker.'
        }
      ],
      macos: [
        {
          title: 'Download Docker Desktop for Mac',
          description: 'Visit **[docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)** and download Docker Desktop, choosing the right version for your Mac.',
          note: 'Choose Apple Silicon version for M1/M2 Macs, Intel version for Intel Macs.'
        },
        {
          title: 'Install Docker Desktop',
          description: 'Open the downloaded DMG file and drag Docker to Applications folder.',
          note: 'This is the standard macOS application installation method.'
        },
        {
          title: 'Launch Docker Desktop',
          description: 'Open Docker Desktop from Applications. Grant necessary permissions when prompted.',
          note: 'macOS may ask for password to install networking components.'
        },
        {
          title: 'Complete Setup',
          description: 'Follow the first-run tutorial and accept the license agreement.',
          note: 'Docker Desktop includes a helpful tutorial for beginners.'
        },
        {
          title: 'Verify Installation',
          description: 'Open Terminal and verify Docker is working.',
          code: 'docker --version\ndocker run hello-world'
        }
      ],
      linux: [
        {
          title: 'Update Package Index',
          description: 'Update your package manager index.',
          code: 'sudo apt update'
        },
        {
          title: 'Install Dependencies',
          description: 'Install required packages for Docker installation.',
          code: 'sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release'
        },
        {
          title: 'Add Docker GPG Key',
          description: 'Add Docker\'s official GPG key.',
          code: 'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg'
        },
        {
          title: 'Add Docker Repository',
          description: 'Add the Docker repository to your system.',
          code: 'echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null'
        },
        {
          title: 'Install Docker Engine',
          description: 'Install Docker using the package manager or download from **[docker.com](https://docs.docker.com/engine/install/)**.',
          code: 'sudo apt update\nsudo apt install docker-ce docker-ce-cli containerd.io'
        },
        {
          title: 'Start Docker Service',
          description: 'Start and enable Docker service.',
          code: 'sudo systemctl start docker\nsudo systemctl enable docker'
        },
        {
          title: 'Add User to Docker Group',
          description: 'Add your user to the docker group to run Docker without sudo.',
          code: 'sudo usermod -aG docker $USER'
        },
        {
          title: 'Verify Installation',
          description: 'Log out and log back in, then test Docker.',
          code: 'docker --version\ndocker run hello-world'
        }
      ]
    },
    troubleshooting: [
      {
        issue: 'Docker daemon not running',
        solution: 'Start Docker Desktop on Windows/Mac, or start docker service on Linux using sudo systemctl start docker.'
      },
      {
        issue: 'Permission denied when running Docker commands',
        solution: 'On Linux, add your user to the docker group: sudo usermod -aG docker $USER, then log out and log back in.'
      },
      {
        issue: 'Docker Desktop won\'t start on Windows',
        solution: 'Ensure WSL 2 and Hyper-V are enabled, check system requirements, and try running as administrator.'
      }
    ]
  },
  {
    id: 'jenkins-github-integration',
    title: 'Jenkins + GitHub Integration',
    description: 'Connect Jenkins with GitHub for automated CI/CD pipelines and webhook-triggered builds.',
    icon: Cloud,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    difficulty: 'Intermediate',
    estimatedTime: '40 minutes',
    prerequisites: ['Jenkins installed and running', 'GitHub account with repository access', 'Git installed on Jenkins server'],
    steps: {
      windows: [
        {
          title: 'Install GitHub Plugin',
          description: 'In Jenkins, go to Manage Jenkins > Manage Plugins > Available and install "GitHub Integration Plugin".',
          note: 'Also install "Git plugin" if not already installed. Restart Jenkins after installation.'
        },
        {
          title: 'Generate GitHub Personal Access Token',
          description: 'In GitHub, go to Settings > Developer settings > Personal access tokens > Generate new token.',
          note: 'Select scopes: repo, admin:repo_hook, admin:org_hook, user:email. Copy the token immediately.'
        },
        {
          title: 'Add GitHub Credentials to Jenkins',
          description: 'Go to Manage Jenkins > Manage Credentials > Global > Add Credentials.',
          note: 'Choose "Secret text" kind, paste your GitHub token as secret, and give it an ID like "github-token".'
        },
        {
          title: 'Configure GitHub Server',
          description: 'Go to Manage Jenkins > Configure System > GitHub section. Add GitHub server with API URL and credentials.',
          code: 'API URL: https://api.github.com\nCredentials: Select your github-token',
          note: 'Test the connection to ensure it works properly.'
        },
        {
          title: 'Create New Jenkins Job',
          description: 'Create a new Freestyle project or Pipeline job for your GitHub repository.',
          note: 'Choose "Freestyle project" for simpler setup or "Pipeline" for more advanced workflows.'
        },
        {
          title: 'Configure Source Code Management',
          description: 'In job configuration, select Git and enter your repository URL.',
          code: 'Repository URL: https://github.com/username/repository.git\nCredentials: Select your GitHub credentials',
          note: 'Specify the branch to build (e.g., */main or */master).'
        },
        {
          title: 'Set Up Build Triggers',
          description: 'Enable "GitHub hook trigger for GITScm polling" in Build Triggers section.',
          note: 'This allows GitHub to trigger builds automatically when code is pushed.'
        },
        {
          title: 'Configure GitHub Webhook',
          description: 'In your GitHub repository, go to Settings > Webhooks > Add webhook.',
          code: 'Payload URL: http://your-jenkins-url:8080/github-webhook/\nContent type: application/json',
          note: 'Replace "your-jenkins-url" with your actual Jenkins server address.'
        },
        {
          title: 'Add Build Steps',
          description: 'Configure build steps based on your project type (Maven, Gradle, npm, etc.).',
          note: 'For Java projects, add "Invoke top-level Maven targets" or "Invoke Gradle script".'
        },
        {
          title: 'Test Integration',
          description: 'Push a commit to your GitHub repository and verify Jenkins triggers a build automatically.',
          note: 'Check Jenkins console output and GitHub commit status for build results.'
        }
      ],
      macos: [
        {
          title: 'Install Required Plugins',
          description: 'Install GitHub Integration Plugin and Git Plugin in Jenkins.',
          note: 'Go to Manage Jenkins > Manage Plugins > Available tab.'
        },
        {
          title: 'Create GitHub Token',
          description: 'Generate a personal access token in GitHub with appropriate permissions.',
          note: 'Include repo, admin:repo_hook, and user:email scopes.'
        },
        {
          title: 'Configure Jenkins Credentials',
          description: 'Add GitHub token to Jenkins credential store.',
          note: 'Use "Secret text" type and provide a meaningful ID.'
        },
        {
          title: 'Set Up GitHub Server',
          description: 'Configure GitHub server settings in Jenkins system configuration.',
          note: 'Test connection to ensure proper authentication.'
        },
        {
          title: 'Create and Configure Job',
          description: 'Set up Jenkins job with GitHub repository as source.',
          note: 'Configure appropriate branch and build triggers.'
        },
        {
          title: 'Set Up Webhooks',
          description: 'Configure GitHub webhook to trigger Jenkins builds.',
          note: 'Ensure Jenkins is accessible from GitHub (may require port forwarding or public IP).'
        },
        {
          title: 'Configure Build Process',
          description: 'Add build steps appropriate for your project technology stack.',
          note: 'Include testing, compilation, and packaging steps as needed.'
        },
        {
          title: 'Verify Integration',
          description: 'Test the complete workflow by pushing changes to GitHub.',
          note: 'Monitor both GitHub and Jenkins for proper integration.'
        }
      ],
      linux: [
        {
          title: 'Install GitHub Plugin',
          description: 'Install GitHub Integration Plugin through Jenkins Plugin Manager.',
          note: 'Restart Jenkins service after plugin installation: sudo systemctl restart jenkins'
        },
        {
          title: 'Generate GitHub Personal Access Token',
          description: 'Create a personal access token in GitHub with necessary permissions.',
          note: 'Required scopes: repo, admin:repo_hook, admin:org_hook, user:email'
        },
        {
          title: 'Configure Jenkins Credentials',
          description: 'Add GitHub credentials to Jenkins credential store.',
          note: 'Navigate to Manage Jenkins > Manage Credentials > Global credentials'
        },
        {
          title: 'Configure GitHub Server',
          description: 'Set up GitHub server configuration in Jenkins system settings.',
          code: 'GitHub Server API URL: https://api.github.com',
          note: 'Test connection to verify credentials work properly.'
        },
        {
          title: 'Create Jenkins Job',
          description: 'Create a new job and configure it to use your GitHub repository.',
          note: 'Choose between Freestyle project or Pipeline based on your needs.'
        },
        {
          title: 'Configure Git Repository',
          description: 'Set up Git repository URL and credentials in job configuration.',
          code: 'Repository URL: https://github.com/username/repo.git',
          note: 'Specify the correct branch to build from.'
        },
        {
          title: 'Enable GitHub Webhooks',
          description: 'Configure webhook in GitHub repository settings.',
          code: 'Webhook URL: http://jenkins-server:8080/github-webhook/',
          note: 'Ensure Jenkins server is accessible from GitHub.'
        },
        {
          title: 'Set Up Build Steps',
          description: 'Configure appropriate build steps for your project.',
          note: 'Include compilation, testing, and packaging steps as required.'
        },
        {
          title: 'Test Complete Workflow',
          description: 'Push changes to GitHub and verify automatic build triggering.',
          note: 'Check Jenkins logs and GitHub commit status for successful integration.'
        }
      ]
    },
    troubleshooting: [
      {
        issue: 'GitHub webhook not triggering builds',
        solution: 'Verify Jenkins URL is accessible from GitHub, check webhook configuration, and ensure "GitHub hook trigger" is enabled in job configuration.'
      },
      {
        issue: 'Authentication failed with GitHub',
        solution: 'Verify personal access token has correct permissions, check token expiration, and ensure credentials are properly configured in Jenkins.'
      },
      {
        issue: 'Git clone fails in Jenkins job',
        solution: 'Check repository URL format, verify credentials have access to the repository, and ensure Git is properly installed on Jenkins server.'
      },
      {
        issue: 'Build status not updating in GitHub',
        solution: 'Install GitHub plugin, configure GitHub server in Jenkins system settings, and ensure webhook payload URL is correct.'
      }
    ]
  },
  {
    id: 'jenkins-docker-integration',
    title: 'Jenkins + Docker Integration',
    description: 'Configure Jenkins to build, test, and deploy Docker containers in CI/CD pipelines.',
    icon: Package,
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    difficulty: 'Intermediate',
    estimatedTime: '50 minutes',
    prerequisites: ['Jenkins installed and running', 'Docker installed on Jenkins server', 'Basic Docker knowledge', 'GitHub repository with Dockerfile'],
    steps: {
      windows: [
        {
          title: 'Install Docker Pipeline Plugin',
          description: 'In Jenkins, install "Docker Pipeline" and "Docker" plugins.',
          note: 'Go to Manage Jenkins > Manage Plugins > Available tab and search for Docker plugins.'
        },
        {
          title: 'Configure Docker in Jenkins',
          description: 'Add Docker installation to Jenkins global tool configuration.',
          note: 'Go to Manage Jenkins > Global Tool Configuration > Docker installations.'
        },
        {
          title: 'Add Jenkins User to Docker Group',
          description: 'Ensure Jenkins service can access Docker daemon.',
          code: 'net localgroup docker-users jenkins /add',
          note: 'Restart Jenkins service after adding user to Docker group.'
        },
        {
          title: 'Create Dockerfile in Repository',
          description: 'Ensure your project has a Dockerfile for building container images.',
          note: 'Dockerfile should be in the root of your repository or specify path in Jenkins job.'
        },
        {
          title: 'Create Jenkins Pipeline Job',
          description: 'Create a new Pipeline job for Docker-based CI/CD.',
          note: 'Pipeline jobs provide better integration with Docker and version control.'
        },
        {
          title: 'Configure Pipeline Script',
          description: 'Create a Jenkinsfile with Docker build and test stages.',
          code: 'pipeline {\n    agent any\n    stages {\n        stage(\'Build\') {\n            steps {\n                script {\n                    docker.build("my-app:${env.BUILD_ID}")\n                }\n            }\n        }\n    }\n}',
          note: 'This basic pipeline builds a Docker image with the build ID as tag.'
        },
        {
          title: 'Add Docker Registry Credentials',
          description: 'Configure credentials for Docker registry (Docker Hub, ECR, etc.).',
          note: 'Go to Manage Jenkins > Manage Credentials and add registry credentials.'
        },
        {
          title: 'Enhance Pipeline with Push Stage',
          description: 'Add stage to push built images to Docker registry.',
          code: 'stage(\'Push\') {\n    steps {\n        script {\n            docker.withRegistry(\'https://registry-url\', \'registry-credentials\') {\n                docker.image("my-app:${env.BUILD_ID}").push()\n            }\n        }\n    }\n}',
          note: 'Replace registry-url and registry-credentials with your actual values.'
        },
        {
          title: 'Add Testing Stage',
          description: 'Include container testing in your pipeline.',
          code: 'stage(\'Test\') {\n    steps {\n        script {\n            docker.image("my-app:${env.BUILD_ID}").inside {\n                sh \'npm test\' // or your test command\n            }\n        }\n    }\n}',
          note: 'Run tests inside the built container to ensure consistency.'
        },
        {
          title: 'Test Complete Pipeline',
          description: 'Run the pipeline to verify Docker integration works correctly.',
          note: 'Monitor console output for Docker build, test, and push operations.'
        }
      ],
      macos: [
        {
          title: 'Install Docker Plugins',
          description: 'Install Docker Pipeline and related plugins in Jenkins.',
          note: 'Required plugins: Docker Pipeline, Docker Commons, Docker API.'
        },
        {
          title: 'Configure Docker Tool',
          description: 'Set up Docker installation in Jenkins global tools.',
          note: 'Usually Docker is installed at /usr/local/bin/docker on macOS.'
        },
        {
          title: 'Verify Docker Access',
          description: 'Ensure Jenkins can access Docker daemon.',
          code: 'sudo dscl . -append /Groups/docker GroupMembership jenkins',
          note: 'Add jenkins user to docker group and restart Jenkins.'
        },
        {
          title: 'Create Docker-enabled Pipeline',
          description: 'Set up Jenkins pipeline with Docker integration.',
          note: 'Use Jenkinsfile in your repository for version-controlled pipeline.'
        },
        {
          title: 'Configure Registry Integration',
          description: 'Set up Docker registry credentials and configuration.',
          note: 'Support for Docker Hub, AWS ECR, Google GCR, and private registries.'
        },
        {
          title: 'Implement Multi-stage Pipeline',
          description: 'Create comprehensive pipeline with build, test, and deploy stages.',
          note: 'Include security scanning and image optimization steps.'
        },
        {
          title: 'Add Container Testing',
          description: 'Implement testing strategies for containerized applications.',
          note: 'Include unit tests, integration tests, and security scans.'
        },
        {
          title: 'Validate Pipeline',
          description: 'Test the complete Docker CI/CD pipeline.',
          note: 'Verify builds, tests, and deployments work as expected.'
        }
      ],
      linux: [
        {
          title: 'Install Docker Plugins',
          description: 'Install necessary Docker plugins in Jenkins.',
          note: 'Install Docker Pipeline, Docker Commons, and Docker API plugins.'
        },
        {
          title: 'Add Jenkins to Docker Group',
          description: 'Grant Jenkins user access to Docker daemon.',
          code: 'sudo usermod -aG docker jenkins\nsudo systemctl restart jenkins',
          note: 'This allows Jenkins to run Docker commands without sudo.'
        },
        {
          title: 'Configure Docker in Jenkins',
          description: 'Set up Docker installation in Jenkins global tool configuration.',
          code: 'Docker executable: /usr/bin/docker',
          note: 'Verify Docker path with: which docker'
        },
        {
          title: 'Create Jenkinsfile',
          description: 'Create a Jenkinsfile in your repository with Docker pipeline.',
          code: 'pipeline {\n    agent any\n    stages {\n        stage(\'Build Image\') {\n            steps {\n                script {\n                    def image = docker.build("myapp:${env.BUILD_NUMBER}")\n                }\n            }\n        }\n    }\n}',
          note: 'This creates a basic Docker build pipeline.'
        },
        {
          title: 'Add Registry Credentials',
          description: 'Configure Docker registry credentials in Jenkins.',
          note: 'Add credentials for Docker Hub, AWS ECR, or private registry.'
        },
        {
          title: 'Enhance Pipeline with Testing',
          description: 'Add testing stages to your Docker pipeline.',
          code: 'stage(\'Test\') {\n    steps {\n        script {\n            docker.image("myapp:${env.BUILD_NUMBER}").inside {\n                sh \'./run-tests.sh\'\n            }\n        }\n    }\n}',
          note: 'Run tests inside the built container for consistency.'
        },
        {
          title: 'Add Image Push Stage',
          description: 'Configure pipeline to push images to registry.',
          code: 'stage(\'Push\') {\n    steps {\n        script {\n            docker.withRegistry(\'https://index.docker.io/v1/\', \'dockerhub-credentials\') {\n                docker.image("myapp:${env.BUILD_NUMBER}").push()\n                docker.image("myapp:${env.BUILD_NUMBER}").push("latest")\n            }\n        }\n    }\n}',
          note: 'Replace registry URL and credentials ID as needed.'
        },
        {
          title: 'Implement Container Cleanup',
          description: 'Add cleanup stages to manage disk space.',
          code: 'post {\n    always {\n        sh \'docker system prune -f\'\n    }\n}',
          note: 'Clean up unused Docker images and containers after build.'
        },
        {
          title: 'Test Complete Integration',
          description: 'Run the pipeline to verify Docker integration works properly.',
          note: 'Monitor resource usage and build times for optimization opportunities.'
        }
      ]
    },
    troubleshooting: [
      {
        issue: 'Jenkins cannot access Docker daemon',
        solution: 'Add jenkins user to docker group: sudo usermod -aG docker jenkins, then restart Jenkins service.'
      },
      {
        issue: 'Docker build fails in Jenkins pipeline',
        solution: 'Check Dockerfile syntax, verify base image availability, and ensure sufficient disk space on Jenkins server.'
      },
      {
        issue: 'Pipeline fails to push to Docker registry',
        solution: 'Verify registry credentials, check network connectivity, and ensure proper authentication configuration.'
      },
      {
        issue: 'Docker commands hang in Jenkins job',
        solution: 'Check Docker daemon status, verify resource limits, and consider using Docker-in-Docker or Docker socket mounting.'
      },
      {
        issue: 'Built images consume too much disk space',
        solution: 'Implement image cleanup in pipeline, use multi-stage builds, and configure Docker system prune in post-build actions.'
      }
    ]
  }
];
