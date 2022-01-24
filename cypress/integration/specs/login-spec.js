/// <reference types="cypress" />

describe('homework', () => {
    beforeEach(() => {
      cy.visit('https://walgreensdev.curapatient.com/login')
    })
    it('should be able to login and schedule an appointment', () => {
      cy.viewport(1280, 720)
      cy.get('[placeholder="Enter username or email"]').type('testPatient107@mailinator.com')
      cy.get('[placeholder="Enter password"]').type('Vaccine1!')
      cy.get('.mr-4.ng-tns-c155-3').click()
      cy.wait(4000)
      cy.contains('6157565765').should('exist')
      cy.contains('testPatient107@mailinator.com').should('exist')
      cy.contains('Nov 11, 2000 | Male').should('exist')
      cy.contains('123 pacific dr Fullerton, CA').should('exist')
      cy.get('.mat-tooltip-trigger').click();
      cy.contains('1:00 AM').click()
      cy.contains('Schedule Appointment').click()
      cy.contains('Close').click()
      cy.contains('Cancel Appointment').click()
      cy.contains('Yes, Cancel Appointment').click()
      })
    });
    