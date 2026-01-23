import React, { useEffect } from 'react'
import HomeComponent from '../../component/Home'

const Home = () => {
    useEffect(() => {
        // Load Prodoc chatbot script
        const script = document.createElement('script');
        script.src = 'https://cep.prodoc.ai/web-bot/main.js';
        script.setAttribute('data-client-id', '68820d613b55037856519239');
        script.async = true;
        
        // Add custom styles for chatbot positioning and behavior
        const style = document.createElement('style');
        style.id = 'prodoc-chatbot-styles';
        style.textContent = `
            /* Custom positioning for Prodoc chatbot */
            .prodoc-chatbot-container,
            [data-client-id="68820d613b55037856519239"] {
                position: fixed !important;
                bottom: 20px !important;
                right: 20px !important;
                z-index: 9999 !important;
            }
            
            /* Ensure chatbot popup appears above all content */
            .prodoc-chatbot-container *,
            [data-client-id="68820d613b55037856519239"] * {
                z-index: 9999 !important;
            }
            
            /* Keep chatbot icon visible when popup is open */
            .prodoc-chatbot-widget,
            .prodoc-chatbot-trigger,
            .prodoc-chatbot-button {
                position: fixed !important;
                bottom: 20px !important;
                right: 20px !important;
                z-index: 10000 !important;
                display: block !important;
                visibility: visible !important;
            }
            
            /* Chatbot popup window styling */
            .prodoc-chatbot-popup,
            .prodoc-chatbot-modal,
            .prodoc-chatbot-window {
                z-index: 10001 !important;
                position: fixed !important;
            }
            
            /* Override any conflicting styles */
            .prodoc-chatbot-container .prodoc-chatbot-widget {
                z-index: 10000 !important;
            }
            
            /* Ensure all chatbot elements are above images and other content */
            iframe[src*="prodoc"],
            div[id*="prodoc"],
            div[class*="prodoc"] {
                z-index: 10002 !important;
            }
        `;
        
        // Add JavaScript for dynamic styling
        const jsCode = `
            // Ensure chatbot icon remains visible and popup appears above content
            setTimeout(function() {
                // Find all chatbot elements
                const chatbotElements = document.querySelectorAll('[data-client-id="68820d613b55037856519239"], .prodoc-chatbot-container, .prodoc-chatbot-widget');
                
                chatbotElements.forEach(function(element) {
                    // Ensure high z-index
                    element.style.zIndex = '10000';
                    
                    // Find and style popup elements
                    const popups = element.querySelectorAll('.prodoc-chatbot-popup, .prodoc-chatbot-modal, .prodoc-chatbot-window');
                    popups.forEach(function(popup) {
                        popup.style.zIndex = '10001';
                        popup.style.position = 'fixed';
                    });
                    
                    // Ensure trigger button stays visible
                    const triggers = element.querySelectorAll('.prodoc-chatbot-trigger, .prodoc-chatbot-button');
                    triggers.forEach(function(trigger) {
                        trigger.style.zIndex = '10000';
                        trigger.style.display = 'block';
                        trigger.style.visibility = 'visible';
                    });
                });
                
                // Monitor for dynamically added elements
                const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        mutation.addedNodes.forEach(function(node) {
                            if (node.nodeType === 1) { // Element node
                                if (node.matches && (node.matches('.prodoc-chatbot-popup, .prodoc-chatbot-modal, .prodoc-chatbot-window') || 
                                    node.querySelector && node.querySelector('.prodoc-chatbot-popup, .prodoc-chatbot-modal, .prodoc-chatbot-window'))) {
                                    node.style.zIndex = '10001';
                                    node.style.position = 'fixed';
                                }
                            }
                        });
                    });
                });
                
                observer.observe(document.body, { childList: true, subtree: true });
            }, 2000); // Wait 2 seconds for chatbot to load
        `;
        
        const scriptElement = document.createElement('script');
        scriptElement.textContent = jsCode;
        
        // Add elements to document
        document.head.appendChild(style);
        document.head.appendChild(script);
        document.head.appendChild(scriptElement);
        
        // Cleanup function
        return () => {
            try {
                // Remove script
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
                
                // Remove style
                const existingStyle = document.getElementById('prodoc-chatbot-styles');
                if (existingStyle && existingStyle.parentNode) {
                    existingStyle.parentNode.removeChild(existingStyle);
                }
                
                // Remove JavaScript
                if (scriptElement.parentNode) {
                    scriptElement.parentNode.removeChild(scriptElement);
                }
                
                // Remove chatbot elements
                const chatbotElements = document.querySelectorAll('[data-client-id="68820d613b55037856519239"], .prodoc-chatbot-container, .prodoc-chatbot-widget');
                chatbotElements.forEach(element => {
                    if (element.parentNode) {
                        element.parentNode.removeChild(element);
                    }
                });
            } catch (error) {
                console.warn('Error during chatbot cleanup:', error);
            }
        };
    }, []);

    return (
        <>
            <HomeComponent />
        </>
    )
}

export default Home
