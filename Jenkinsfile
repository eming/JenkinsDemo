pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building..'
      }
    }

    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }

    stage('') {
      steps {
        input(message: 'Continue', id: 'wiat-for-input', ok: 'Yes Please')
        echo 'Deploy to live'
      }
    }

  }
  options {
    enforceBuildSchedule()
  }
}