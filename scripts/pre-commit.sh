set -e

cd "${0%/*}/.."

echo "Running rubocop"
bundle exec rubocop

echo "Running rspec tests"
bundle exec rspec

echo "Running ESLint"
yarn eslint

echo "Running Stylelint"
yarn stylelint

echo "Running jest tests"
yarn test

# $? stores exit value of the last command
if [ $? -ne 0 ]; then
 echo "Code must be clean before commiting"
 exit 1
fi
