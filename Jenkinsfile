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

    stage('Stg') {
      steps {
        echo 'Deploying....'
      }
    }

    
    stage('Load Test - Stg3') {
      steps {
        sh '''docker run  loadimpact/k6 version'''
      }
    }
    
    stage('Live') {
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
