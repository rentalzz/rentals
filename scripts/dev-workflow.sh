#!/bin/bash

# Development Workflow Script for Rentals App
# Usage: ./scripts/dev-workflow.sh [command]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}🔍 $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if we're in the right directory
check_directory() {
    if [ ! -f "package.json" ] || [ ! -f "react-native.config.js" ]; then
        print_error "Please run this script from the project root directory"
        exit 1
    fi
}

# Function to show help
show_help() {
    echo "🚀 Rentals App Development Workflow"
    echo ""
    echo "Usage: ./scripts/dev-workflow.sh [command]"
    echo ""
    echo "Commands:"
    echo "  setup          - Initial project setup"
    echo "  clean          - Clean all builds and reinstall"
    echo "  dev            - Start development server"
    echo "  android        - Run on Android"
    echo "  ios            - Run on iOS"
    echo "  check          - Run all checks (TypeScript, ESLint, Prettier)"
    echo "  fix            - Auto-fix all issues"
    echo "  test           - Run tests"
    echo "  fonts          - Setup and verify fonts"
    echo "  help           - Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./scripts/dev-workflow.sh setup"
    echo "  ./scripts/dev-workflow.sh dev"
    echo "  ./scripts/dev-workflow.sh clean"
}

# Function to setup project
setup_project() {
    print_status "Setting up Rentals project..."
    
    # Install dependencies
    print_status "Installing dependencies..."
    npm install
    
    # Setup fonts
    print_status "Setting up fonts..."
    npm run fonts:setup
    
    # Setup git hooks
    print_status "Setting up git hooks..."
    npm run prepare
    
    print_success "Project setup complete!"
}

# Function to clean project
clean_project() {
    print_status "Cleaning project..."
    
    # Clean node modules
    print_status "Cleaning node modules..."
    npm run clean
    
    # Clean Android
    print_status "Cleaning Android build..."
    npm run clean:android
    
    # Clean iOS
    print_status "Cleaning iOS build..."
    npm run clean:ios
    
    print_success "Project cleaned successfully!"
}

# Function to start development
start_dev() {
    print_status "Starting development server..."
    npm run dev
}

# Function to run on Android
run_android() {
    print_status "Running on Android..."
    npm run android
}

# Function to run on iOS
run_ios() {
    print_status "Running on iOS..."
    npm run ios
}

# Function to run checks
run_checks() {
    print_status "Running all checks..."
    npm run check
}

# Function to auto-fix issues
auto_fix() {
    print_status "Auto-fixing issues..."
    npm run fix
}

# Function to run tests
run_tests() {
    print_status "Running tests..."
    npm run test
}

# Function to setup fonts
setup_fonts() {
    print_status "Setting up fonts..."
    npm run fonts:setup
}

# Main script logic
main() {
    check_directory
    
    case "${1:-help}" in
        setup)
            setup_project
            ;;
        clean)
            clean_project
            ;;
        dev)
            start_dev
            ;;
        android)
            run_android
            ;;
        ios)
            run_ios
            ;;
        check)
            run_checks
            ;;
        fix)
            auto_fix
            ;;
        test)
            run_tests
            ;;
        fonts)
            setup_fonts
            ;;
        help|*)
            show_help
            ;;
    esac
}

# Run main function with all arguments
main "$@"
